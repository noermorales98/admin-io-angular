import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../../services/services.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;

  constructor(private http: ServicesService, public fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      name_member:[''],
      email_member: [''],
      password_member: [''],
      phone_member: [''],
      description_member: ['']
    });
  }

  enviar() {
    this.http.createUser(this.user?.value).subscribe(
      res=>{
        //this.user.push(res);
        this.user?.reset();
        this.router.navigate(['/login']);
      }
    )
  }
}
