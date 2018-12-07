import { Injectable } from "@angular/core";
import { CanLoad, Router } from "@angular/router";
import { AuthenticationService } from "./authentication/authentication.service";

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canLoad(): boolean {
    if (this.authService.getSessionStatus()) {
      return true;
    }
    this.router.navigate(['./login']);
    return false;
  }
}
