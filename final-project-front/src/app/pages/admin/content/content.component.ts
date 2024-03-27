import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})

export class ContentComponent implements OnInit {
  browserInfo: string | undefined;
  osInfo: string | undefined;

  ngOnInit() {
    this.browserInfo = `Browser: ${navigator.userAgent}`;
    this.osInfo = `OS: ${navigator.platform}`;
  }
}