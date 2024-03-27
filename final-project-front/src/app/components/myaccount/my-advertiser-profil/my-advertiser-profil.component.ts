import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';
import { userProfileService } from '../../../services/user-profile.service';
import { FormsModule } from '@angular/forms';

interface AdvertiserProfile {
    genre: string;
    orientation: string;
    size: string;
    weight: string;
    penisSize: number;
    braCup: string;
    hairColor: string;
    eyeColor: string;
}

@Component({
  selector: 'app-my-advertiser-profil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-advertiser-profil.component.html',
  styleUrl: './my-advertiser-profil.component.scss'
})
export class MyAdvertiserProfilComponent  implements OnInit {

  advertiserProfile: AdvertiserProfile | null = null;
  isEditing = false;
  formData: any = {};
  

  constructor(private userProfileService: userProfileService) {
   
  }

  ngOnInit() {
    this.userProfileService.getAdvertiserData().subscribe(data => {
      this.advertiserProfile = data as AdvertiserProfile;
      this.formData = { ...this.advertiserProfile };
      console.log(this.formData);
      
    });
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
  } 
}