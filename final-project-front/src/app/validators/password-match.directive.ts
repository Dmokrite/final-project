import { AbstractControl } from "@angular/forms";

export function passwordMatchValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const password = control.get("password")?.value;
  const confirmPassword = control.get("confirmPassword")?.value;

  if (password !== confirmPassword) {
    return { passwordMismatch: "Les mots de passe ne correspondent pas" };
  }
  return null;
}
