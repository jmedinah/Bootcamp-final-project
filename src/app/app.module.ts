import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { MockApiService } from "./mock-api-service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(MockApiService, {
          passThruUnknownUrl: true
        })
  ],
  providers: [MockApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
