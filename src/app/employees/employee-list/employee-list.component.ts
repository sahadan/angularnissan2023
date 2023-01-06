import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  //declare variables
  term: string;
  page: number=1;

  constructor(public employeeService: EmployeeService,
    private router: Router ) { }

  ngOnInit(): void { // Life Cycle hook
    console.log("hi Mukit");
    this.getAllEmployeesForComponent();
    this.employeeService.getAllEmployees();
  }
  
  // 1 Get method for all employees
  getAllEmployeesForComponent():void{
    // call service here
    console.log("Get all employees");
    // call service method
    this.employeeService.getAllEmployeesList().subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
    
  }

  //2 Update Employee
  updateEmployee(employee: Employee){
    console.log(employee);
    // navigate to Edit Form with selected employee details
    this.populateForm(employee);
    this.router.navigate(['employeeadd',employee.empId])
    // localhost:4200/employeeadd/2
  }

  //3 Delete Employee
  deleteEmployee(empId: number){
    console.log(empId);
    if(confirm('Are you sure to DELETE this employee?')){
      //call service for deletion
      console.log("call service for deletion");
    }
  }

  //4 PopulateForm When click td
  populateForm(employee: Employee){
    console.log(employee);
    this.employeeService.formEmployeeData= Object.assign({},employee);
  }
}
