import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  hide = true;
  inProgress = false;
  errorMessage;

  signInForm: FormGroup;
  emailField: FormControl;
  passField: FormControl;


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.passField = new FormControl('', Validators.required);
    this.signInForm = this.fb.group({
      email: this.emailField,
      pass: this.passField
    });
  }

  shouldDisableSubmit() {
    return !this.emailField.valid ||
      !this.passField.valid;
  }

  login() {
    if (this.signInForm.valid) {
      const email = this.emailField.value;
      const pass = this.passField.value;

      this.authService.logIn({ email: email, password: pass }).then( (res: any) => {
        if (!res.error) {
          this.authService.setUser(res);
          this.inProgress = false;
          this.router.navigate(['dashboard']).then();
        } else {
          this.inProgress = false;
          this.errorMessage = res.message;
        }
      });

      this.inProgress = true;
    }
  }

}
