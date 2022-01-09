import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  PATH_OF_API = 'http://localhost:8080/EmployeeApp';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpclient: HttpClient) {}

  public getEmployeesList(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(
      this.PATH_OF_API + '/getAllEmployee',
      {
        headers: this.requestHeader,
      }
    );
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpclient.post(
      this.PATH_OF_API + '/createNewEmployee',
      employee,
      {
        headers: this.requestHeader,
      }
    );
  }
}