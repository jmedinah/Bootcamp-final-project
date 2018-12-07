import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  isSignedIn: boolean;
  constructor() {}

  setSessionStatus(param: boolean) {
    this.isSignedIn = param;
  }

  getSessionStatus() {
    return this.isSignedIn;
  }
}
