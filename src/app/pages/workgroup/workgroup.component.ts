import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../../services/services.service";
import {HttpClient} from "@angular/common/http";
import {Administrador} from "../../models/administrador";

@Component({
  selector: 'app-workgroup',
  templateUrl: './workgroup.component.html',
  styleUrls: ['./workgroup.component.css']
})
export class WorkgroupComponent implements OnInit {
  works: any;
  tareas: Administrador[]=[];
  constructor(private http: ServicesService) { }
public valor1:[]=[];

  ngOnInit(): void {
     /*this.http.getWorks().subscribe(
      valor => (
        console.log(valor)
      )
    );*/


    this.http.work().subscribe(tareas => this.tareas.push(...tareas));
  }

  delete(work: any){
    console.log(work)
    this.http.delete(work).subscribe(res=>{
      this.works.pop(res);
    },
    error => {console.log(error)}
    )
  }
}
