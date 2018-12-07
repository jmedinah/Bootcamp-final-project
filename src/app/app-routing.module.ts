import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    // canLoad: [AuthGuard]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
