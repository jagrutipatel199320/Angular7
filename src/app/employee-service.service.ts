import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees(){
  return [
	{"id":1, "name":"jagruti", "age": 25},
	{"id":2, "name":"Nilam", "age": 26},
	{"id":3, "name":"Uttam", "age": 24},

	];
  }
}
