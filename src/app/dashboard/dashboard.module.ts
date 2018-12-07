import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { AuthenticationService } from "../authentication/authentication.service";
import { LogoutComponent } from "./logout/logout.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { EmployeesModule } from "./employees/employees.module";
import { ProjectsModule } from "./projects/projects.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [DashboardComponent, LogoutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EmployeesModule,
    ProjectsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [AuthenticationService]
})
export class DashboardModule {}
