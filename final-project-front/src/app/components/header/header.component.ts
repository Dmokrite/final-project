import { Component } from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { LogoComponent } from "../logo/logo.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterModule, LogoComponent, NavbarComponent, CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    
  }
  

}
