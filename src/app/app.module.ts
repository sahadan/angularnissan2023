import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

import { HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './shared/employee.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
