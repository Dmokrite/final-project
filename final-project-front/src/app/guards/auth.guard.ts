import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  //s'il y a un email dans le sessionStorage, on retourne true (utilisateur connecté), sinon on le redirige vers la page de login
  if (sessionStorage.getItem("email")) {
    return true;
  } else {
    const router = inject(Router);
    return router.navigate(["/login"]);
  }
};
