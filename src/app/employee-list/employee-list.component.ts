import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
	
	public employees = [];

  constructor(private _employeeServiceService: EmployeeServiceService) { }

  ngOnInit() {
  this.employees = this._employeeServiceService.getEmployees();
  }

}
