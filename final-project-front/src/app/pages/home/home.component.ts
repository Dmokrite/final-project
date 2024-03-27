import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterLink } from "@angular/router";
import { RouterModule } from "@angular/router";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderHomeComponent } from "../../components/header-home/header-home.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink, CarouselComponent, NavbarComponent, HeaderHomeComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
