import { Component, OnInit } from '@angular/core';
import { MyAnnounceService } from '../../../services/my-announce.service';
import { FormsModule } from '@angular/forms';
import { UploadFilesComponent } from '../../upload-multiple/upload-multiple.component';

interface PersonalData {
  announce: {
    title: string;
    description: string;
    infidelityCard: false;
    private: boolean;
    escort: boolean;
    practices: number[]; 
    pricing: {
      _15: number,
      _30: number,
      _45: number,
      _60: number,

    }
    }
}
interface Practice {
  id: number;
}



@Component({
  selector: 'app-my-ad',
  standalone: true,
  imports: [FormsModule, UploadFilesComponent],
  templateUrl: './my-ad.component.html',
  styleUrl: './my-ad.component.scss'
})


export class MyAdComponent implements OnInit{

  personalData: PersonalData | null = null;
  isEditing = false;
  formData: any = {};
  practices: Practice[] | null = null;
  obj: { [key: number]: string } = {};
  

  constructor(private myAnnounceService: MyAnnounceService) {
  }

  ngOnInit() {
    this.myAnnounceService.getPersonalData().subscribe(data => {
      this.personalData = data as PersonalData;
      this.formData = { ...this.personalData };

      const practicesNames = { 1: "Pratique1", 2: "Pratique2", 3: "Pratique3", 4: "Pratique4", 5: "Pratique5", 6: "Pratique6"};

      this.obj = Object.fromEntries(
        this.formData.announce.practices.map((id: any) => {
          return [id, practicesNames[id as keyof typeof practicesNames] || id];
        })
      );
    });
  }


  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSubmit(formData: any) {
    const userId = localStorage.getItem('userid');
    const updateData = {
      userId: Number(userId),
      title: formData.title,
      description: formData.description,
      infidelityCard: false,
      private: true,
      escort: true,
      pricing: {
        _15: 80,
        _30: 100,
        _45: 120,
        _60: 150
      },
      practices: [1,2,3,4,5]
    }
    ;
    console.log('updateData:', updateData);
    console.log('Sending data (JSON format):', JSON.stringify(updateData));
    this.myAnnounceService.updatePersonalData(updateData).subscribe(
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