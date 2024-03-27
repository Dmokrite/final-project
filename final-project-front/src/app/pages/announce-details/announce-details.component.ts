import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { AnnouncesAllService } from '../../services/announces-all.service';
import { UserData } from '../announces-all/announces-all.component';


@Component({
  selector: 'app-announce-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './announce-details.component.html',
  styleUrl: './announce-details.component.scss'
})
export class AnnounceDetailsComponent implements OnInit {
annonce: UserData | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private announcesAllService: AnnouncesAllService
  ) {}

  ngOnInit() {
    
  }

  goBack(): void {
    window.history.back();
  }
}