import { Component } from "@angular/core";
import { RouterLink, RouterOutlet, RouterModule } from "@angular/router";

@Component({
  selector: "app-logo",
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: "./logo.component.html",
  styleUrl: "./logo.component.scss",
})
export class LogoComponent {}
