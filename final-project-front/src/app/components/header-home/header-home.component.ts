import { Component, OnInit } from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { LogoComponent } from "../logo/logo.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header-home",
  standalone: true,
  imports: [RouterLink, RouterModule, LogoComponent, NavbarComponent, CommonModule],
  templateUrl: "./header-home.component.html",
  styleUrl: "./header-home.component.scss",
})
export class HeaderHomeComponent implements OnInit {
  isScrolled: boolean = false; // Flag to track scroll state

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.isScrolled = window.scrollY > 0; // Adjust threshold as needed
  }
}