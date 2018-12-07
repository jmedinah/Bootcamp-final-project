import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Employee } from "./employee.model";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"]
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "company", "age", "color"];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  url = "app/employees";
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((data: Employee[]) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id) {
    this.http.delete(this.url, id);
    this.http.get(this.url).subscribe((data: Employee[]) => {
      // this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
    });
  }
}
