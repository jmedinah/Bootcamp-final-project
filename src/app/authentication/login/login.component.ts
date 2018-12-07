import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  async login() {
    try {
      const response = await this.afAuth.auth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );

      this.authService.setSessionStatus(true);
      this.router.navigate(["./dashboard"]);
    } catch (error) {
      console.error(error);
    }
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {}
}
