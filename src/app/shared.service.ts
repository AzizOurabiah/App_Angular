import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'http://localhost:53535/api';
  readonly PhotoUrl = 'http://localhost:53535/Photos';

  constructor(private http: HttpClient) {}

  /**************************************** Méthode pour le component Department *******************************************/

  //Méthode pour avoir la liste des données
  getDepList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/department');
  }

  //Méthode pour Post pour ajouter un nouveau départment
  addDepartment(val: any) {
    return this.http.post(this.APIUrl + '/department', val);
  }

  //Méthode pour udate data
  updateDepartment(val: any) {
    return this.http.put(this.APIUrl + '/department', val);
  }

  //Méthode pour supprimer employee
  deleteDepartment(val: any) {
    return this.http.delete(this.APIUrl + '/department/', val);
  }

  /******************************************** Méthode pour Employee Component ********************************************************/
  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/employee');
  }

  //Méthode pour Post pour ajouter un nouveau employee
  addEmployee(val: any) {
    return this.http.post(this.APIUrl + '/employee', val);
  }

  //Méthode pour udate data
  updateEmployeee(val: any) {
    return this.http.put(this.APIUrl + '/employee', val);
  }

  //Méthode pour supprimer employee
  deleteEmployee(val: any) {
    return this.http.delete(this.APIUrl + '/employee/', val);
  }

  /************************************************************************************ */

  uploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Employee/SaveFile', val);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'Employee/GetAllDepartmentNames');
  }
}
