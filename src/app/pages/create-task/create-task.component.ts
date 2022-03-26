import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../../services/services.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  personas:any= [];
  tareas: any =[];
  name_work : string | undefined;
  description_work : string | undefined;
  priority_work: string | undefined;
  process_work: string | undefined;
  startdate_work: Date | undefined;
  enddate_work: Date | undefined;
  work: any;

  constructor(private http: ServicesService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.work = this.fb.group({
      name_work:[''],
      description_work: [''],
      priority_work: [''],
      startdate_work: Date,
    });
  }

  enviar(){
    this.http.guardar(this.work?.value).subscribe(
      res=>{
        this.tareas.push(res);
        this.work?.reset();
      }
    )
  }



  login()
  {
    const usr= this.name_work;
    const password= this.description_work;
    console.log("nombre: " + usr);
    console.log("descripcion: " + password);
    console.log("fecha:" + this.startdate_work)
  }
}
