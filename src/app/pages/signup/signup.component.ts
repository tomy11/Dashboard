import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  register = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
    username : new FormControl(''),
  })


  constructor(private service: AuthService){}

  ngOnInit(): void {
  }

  onSubmit(): void {
    //this.service.signup(this.register.value);
    console.log(this.register.value);

  }
}
