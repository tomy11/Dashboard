import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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


  constructor(private router: Router, private service: AuthService){}

  ngOnInit(): void {}

  onSubmit(): void {
    this.service.signup(this.register.value).subscribe({
      next: (v) => {
        console.log('save success')
        this.router.navigate(['/']);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
}
