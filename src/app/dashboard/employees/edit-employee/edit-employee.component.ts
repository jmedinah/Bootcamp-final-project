import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


  // form: FormGroup;
  // url = "app/heroes";

 
  // constructor(private fb: FormBuilder) {

  //   this.form = this.fb.group({
  //     username: ["", Validators.required],
  //     password: ""
  //   });
  // }

  // onSubmit(event) {
  //   this.http
  //     .post(this.url, { name: "Jonathan" })
  //     .pipe(switchMap(() => this.http.get(this.url)))
  //     .subscribe(data => console.log(data));
  //   // console.log(event);
  // }