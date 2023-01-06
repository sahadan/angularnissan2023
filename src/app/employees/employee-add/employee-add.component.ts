import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  //declare variable
  _empId: number;

  constructor(public employeeService: EmployeeService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { } // Inject

  ngOnInit(): void { //Life Cycle hook

    //get all departments
    this.employeeService.getAllDepartments();

    //getting data from url
    this._empId=this.route.snapshot.params['empId'];
    // @Input
    // @Output
  }

  //Submit Method
  onSubmit(form: NgForm){
    console.log(form.value);
    let _addEmpId=this.employeeService.formEmployeeData.empId;
    
    //check condition
    if(_addEmpId ==0 || _addEmpId==null){
      //INSERT
      this.addEmployee(form);
      this.router.navigateByUrl("/employeelist");
      //window.location.reload();
      
    }else{
      //UPDATE
      this.editEmployee(form);
      this.router.navigateByUrl("/employeelist");
      //window.location.reload();
    }
    
  }

  //INSERT 
  addEmployee(form?: NgForm){
    console.log("Inserting...");
    this.employeeService.insertEmployee(form.value).subscribe(
      (result)=>{
        console.log(result);
        // reset Form
        //Notification
        this.toastr.success("Employee record has been inserted!","EmpAppv2023");
      },
      (error)=>{
        console.log(error);
        this.toastr.error("Something wrong...try again","EmpAppv2023");
      }

    );
  }

  //UPDATE
  editEmployee(form?: NgForm){
    console.log("Updating...");
    this.employeeService.updateEmployee(form.value).subscribe(
      (result)=>{
        
        console.log(result);
        this.toastr.info("Employee record has been updated!","EmpAppv2023");
      },
      (error)=>{
        console.log(error);
        this.toastr.error("Something wrong...try again","EmpAppv2023");
      }

    );
  }

    

}
