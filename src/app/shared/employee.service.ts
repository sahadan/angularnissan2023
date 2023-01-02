import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //declare variables--- global variable
  formEmployeeData: Employee= new Employee(); //single employee

  //list of Employees
  employees: Employee[]; // all employees

  constructor(private httpClient: HttpClient) { } // Constructor Injection : DI


  //1 Get all employees
  getAllEmployees(){
    this.httpClient.get(environment.apiUrl + '/api/employees')
    .toPromise()
    .then(
      (response) =>{
        console.log(response);
        this.employees=response as Employee[];
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
