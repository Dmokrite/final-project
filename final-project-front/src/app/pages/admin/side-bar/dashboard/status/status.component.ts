import { Component, OnInit } from '@angular/core';
import { StatService } from '../../../../../services/stat.service';
import { Stats } from '../../../../../interfaces/stats';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-status',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent implements OnInit {
  stats: Stats | null = null;
  constructor(private statService:StatService){
    
  }
  ngOnInit(): void {
    this.statService.getStat().subscribe((data: any) => {
      this.stats = data;
      console.log('ici stat',this.stats);
    },
    (error) => {
      console.error(
        'Erreur lors de la récupération des stats:',
        error
      );
    });
  }
  getCount(propertyName: keyof Stats): string | null {
    return this.stats ? this.stats[propertyName] : null;
  }
  
}
