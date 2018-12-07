import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeesComponent } from "./employees.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { MatPaginatorModule } from "@angular/material";

@NgModule({
  declarations: [EmployeesComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  exports: []
})
export class EmployeesModule {}
// ReactiveFormsModule,
// import { ReactiveFormsModule } from "@angular/forms";
