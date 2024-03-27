import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PersonalData {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    niss: string;
    nickname: string;
    password: string;
    address: {
      street: string;
      number: string;
      city: string;
      zip_code: string;
    };
  };
}

@Component({
  selector: 'app-my-personal-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-personal-data.component.html',
  styleUrl: './my-personal-data.component.scss'
})
export class MyPersonalDataComponent implements OnInit {

  personalData: PersonalData | null = null;
  isEditing = false;
  formData: any = {};
  

  constructor(private userDataService: UserDataService) {
   
  }

  ngOnInit() {
    this.userDataService.getPersonalData().subscribe(data => {
      this.personalData = data as PersonalData;
      this.formData = { ...this.personalData.user };
    });
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSubmit(formData: any) {
    const updateData = {
      nickname: formData.nickname,
      email: formData.email,
      address: {
        street: formData.address.street,
        number: formData.address.number,
        city: formData.address.city,
        zip_code: formData.address.zip_code,
      }
    }
    ;
    console.log('updateData:', updateData);
    console.log('Sending data (JSON format):', JSON.stringify(updateData));
    this.userDataService.updatePersonalData(updateData).subscribe(
      response => {
        console.log('Update successful!', response);
        this.personalData = response;
        this.isEditing = false;
      },
      error => {
        console.error('Update failed:', error);
      }
    );
    window.location.reload();
  }
}