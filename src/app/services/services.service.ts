import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {api} from "../../environments/api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',

})
export class ServicesService {

  private REST_API_SERVER = "http://localhost:8080/adminapi/v1/";


  constructor(private http: HttpClient) { }

  public getAdmins():Observable<any>{
    return this.http.get(this.REST_API_SERVER + "getAdmins")
  }
}
