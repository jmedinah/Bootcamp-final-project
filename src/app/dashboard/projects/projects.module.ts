import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectsComponent } from "./projects.component";
import { EditProjectComponent } from "./edit-project/edit-project.component";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { MatPaginatorModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  declarations: [ProjectsComponent, EditProjectComponent],
  exports: []
})
export class ProjectsModule {}
