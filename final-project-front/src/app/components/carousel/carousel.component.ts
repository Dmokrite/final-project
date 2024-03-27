import { Component } from "@angular/core";
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.scss",
})
export class CarouselComponent {
  images = [1, 2, 3].map(
    (n) => `../../../../../assets/images/home-slider/image${n}.png`
  );
}
