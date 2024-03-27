import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[\w\-\.]+@([\w\-]+\.)+[\w]{2,4}$/;
  
    if (!emailRegex.test(control.value)) {
      return { email: 'L\'adresse email n\'est pas valide' };
    }
  
    const dotIndex = control.value.lastIndexOf('.');
  
    if (dotIndex === -1 || control.value.length - dotIndex < 3) {
      return { email: 'L\'adresse email doit avoir au moins un . suivi de 2 caractères' };
    }
  
    return null;
  }