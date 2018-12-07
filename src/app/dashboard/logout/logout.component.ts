import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/authentication/authentication.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"]
})
export class LogoutComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  async logout() {
    try {
      const response = await this.afAuth.auth.signOut();
      this.authService.setSessionStatus(true);
      this.router.navigate(["./login"]);
    } catch (error) {
      console.error(error);
    }
  }
}
