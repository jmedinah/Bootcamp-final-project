import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment";
import { AuthenticationService } from "./authentication.service";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, "final-project"),
    AngularFireAuthModule,
    MatButtonModule
  ],
  providers: [AuthenticationService],
  exports: [LoginComponent]
})
export class AuthenticationModule {}
