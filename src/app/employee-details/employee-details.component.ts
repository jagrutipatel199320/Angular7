import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
public employees = [];
  constructor(private _employeeServiceService: EmployeeServiceService) { }

  ngOnInit() {
   this.employees = this._employeeServiceService.getEmployees();
  }

}
