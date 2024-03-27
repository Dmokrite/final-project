import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AllAnnouncesService } from '../../services/all-announces.service';
interface UserData {
  id: number;
  firstname: string;
  lastname: string;
}
@Component({
  selector: 'app-all-announces',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './all-announces.component.html',
  styleUrl: './all-announces.component.scss'
})
export class AllAnnouncesComponent implements OnInit {
  users: UserData[] = []; // Initialize users as an empty array

  constructor(private allAnnouncesService: AllAnnouncesService) {}

  ngOnInit(): void {
    

    const token = localStorage.getItem('token');

    if (token) {
      this.allAnnouncesService.getUsers(token)
        .subscribe(
          (data: UserData[]) => {
            this.users = data;
            console.log(data);
            
          },
          (error: any) => {
            console.error('Une erreur s\'est produite : ', error);
          }
        );
    } else {
      console.error('Aucun token trouvé dans le localStorage');
    }
    
    
  }
}