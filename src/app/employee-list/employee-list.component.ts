import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  firstName: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    /*
      {
        employeeId: '1fe',
        firstName: 'sam',
        lastName: 'tim',
        age: 12,
        salary: 2344,
      },
      {
        employeeId: 'koko',
        firstName: 'asian',
        lastName: 'inem',
        age: 9,
        salary: 234,
      },
      */
  }

  private getEmployees() {
    return this.employeeService.getEmployeesList().subscribe(
      (response) => {
        console.log(response);
        this.employees = response;
      },

      (error) => {
        console.log(error);
      }
    );
  }

  updateEmployee(employeeId: string) {
    this.router.navigate(['update-employee', employeeId]);
  }
  deleteEmployee(employeeId: string) {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response) => {
        console.log(response);
        this.getEmployees();
        // this.employees = response;
      },

      (error) => {
        console.log(error);
      }
    );
  }

  sortEmployees() {
    return this.employeeService.getSortedEmployeesList().subscribe(
      (response) => {
        console.log(response);
        this.employees = response;
      },

      (error) => {
        console.log(error);
      }
    );
  }
}
