import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../../../services/user-data.service';
import { FormsModule } from '@angular/forms';
import { PersonalDataFull } from '../../../../../../interfaces/personal-data-full';
import { UserListService } from '../../../../../../services/user-list.service';

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.scss',
})
export class MyModalComponent implements OnInit {
  personalData: PersonalDataFull | null = null;
  formData: any = {};

  constructor(
    private userDataService: UserDataService,
    private userListe: UserListService
  ) {}

  ngOnInit() {
  //   this.userListe.getOneUsers().subscribe((data) => {
      
  // })
}
}