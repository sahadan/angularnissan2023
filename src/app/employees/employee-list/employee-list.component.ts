import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void { // Life Cycle hook
    console.log("hi Mukit");
    //this.getAllEmployeesForComponent();
    this.employeeService.getAllEmployees();
  }
  
  // 1 Get method for all employees
  getAllEmployeesForComponent(){
    // call service here
    console.log("Get all employees");
    // call service method
    
  }
}
