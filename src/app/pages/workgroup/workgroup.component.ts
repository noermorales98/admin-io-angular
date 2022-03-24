import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../../services/services.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-workgroup',
  templateUrl: './workgroup.component.html',
  styleUrls: ['./workgroup.component.css']
})
export class WorkgroupComponent implements OnInit {
  admins: any;
  constructor(private http: ServicesService) { }

  ngOnInit(): void {
    this.admins = this.http.getAdmins();
  }

}
