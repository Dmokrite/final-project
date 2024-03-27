import { Component } from "@angular/core";
import { ReactiveFormsModule, Validators, FormBuilder } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { passwordMatchValidator } from "../../validators/password-match.directive";
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces/auth";
import { emailValidator } from "../../validators/email-validator";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      nickname: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      email: ["", [Validators.required, Validators.email, emailValidator]],
      niss: ["", [Validators.required, Validators.maxLength(15)]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        city: ['', Validators.required],
        zip_code: ['', Validators.required],
      }),
      
      
    },
    {
      validators: passwordMatchValidator,
    }
  );

  constructor(private fb: FormBuilder, private authService: AuthService) {console.log(this.registerForm.value);}

  get firstname() {
    return this.registerForm.controls["firstname"];
  }
  get lastname() {
    return this.registerForm.controls["lastname"];
  }
  get nickname() {
    return this.registerForm.controls['nickname'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
  get street() {
    return this.registerForm.controls["address"].get("street");
  }
  get niss() {
    return this.registerForm.controls['niss'];
  }

  get number() {
    return this.registerForm.controls['address'].get('number');
  }

  get city() {
    return this.registerForm.controls['address'].get('city');
  }

  get zip_code() {
    return this.registerForm.controls['address'].get('zip_code');
  }
  

  submitDetails() {
    console.log(this.registerForm.value);
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;
    this.authService.registerUser(postData as User).subscribe(
      (response) => {
        window.alert('Compte créé avec succès !');
        window.location.href = '/login';
      },
      (error) => {
        console.error(error);
        window.alert('Une erreur est survenue lors de la création du compte.');
      }
    );
  }
}
