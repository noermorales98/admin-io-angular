import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {api} from "../../environments/api";
import {Observable} from "rxjs";
import {map} from 'rxjs/Operators'
import {Administrador} from "../models/administrador";

@Injectable({
  providedIn: 'root',

})
export class ServicesService {

  private REST_API_SERVER = "http://localhost:8080/adminapi/v1/";


  constructor(private http: HttpClient) { }

  /*public getAdmins():Observable<any>{
    return this.http.get(this.REST_API_SERVER + "getAdmins")
  }
  public getWorks():Observable<any>{
    return this.http.get(this.REST_API_SERVER + "getWorks")
  }
*/
  work(): Observable<any>{
    return this.http.get<Administrador>(this.REST_API_SERVER + "getWorks").pipe();
  }

  public delete(work: any): Observable<any>{
    return this.http.post(this.REST_API_SERVER + "deleteWork", work);
  }

  public guardar(name_work: any): Observable<any>{
    return this.http.post(this.REST_API_SERVER + "createWork", name_work);
  }

  public createUser(user: any): Observable<any>{
    return this.http.post(this.REST_API_SERVER + "createMember", user);
  }

  public login(user: any): Observable<any>{
    return this.http.get(this.REST_API_SERVER + "getMember", user);
  }

}
