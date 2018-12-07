import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { EmployeesComponent } from "./employees/employees.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: EmployeesComponent },
      { path: "employees", component: EmployeesComponent },
      { path: "projects", component: ProjectsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DashboardRoutingModule {}
