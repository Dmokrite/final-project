import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { ContenaireComponent } from '../../components/contenaire/contenaire.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SideBarComponent,ContentComponent,ContenaireComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent  {
  
}
