import { Department } from "./department";

export class Employee {
    empId: number=0;
    empName: string='';
    designation: string='';
    dateOfJoining: Date=new Date;
    salary: number=0;
    empPhoneNumber:string='';
    deptId: number=0;
    isActive: boolean=false;

    //Object Oriented Model
    //New amendments---
    department: Department= new Department();
}
