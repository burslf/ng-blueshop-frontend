import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { emailValidator, matchingPasswords } from '../../shared/utils/app-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public token: string | null = this.cookieService.get('token');
  // private registerService: RegisterService, private cookieService: CookieService
  constructor(public fb: FormBuilder, public router: Router, private cookieService: CookieService, private auth: AuthService, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      'firstName': [null, Validators.compose([Validators.required])],
      'lastName': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'confirmPassword': ['', Validators.required]   
    }, {validator: matchingPasswords('password', 'confirmPassword')});
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.signup(this.form.value)
    .subscribe(
      (data: any) => {
        console.log(data)
        this.token = data['token']      
        if(this.token) this.cookieService.set('token', this.token)
        this._snackBar.open('Successfully registered !', 'Close', {
          duration: 1800
        })
        this.router.navigate(['/login'])
      },
      err => console.log(err)
    )
  }
}
