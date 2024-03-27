import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserListService } from '../../../../../services/user-list.service';
import { ListUser } from '../../../../../interfaces/list-user';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MyModalComponent } from './my-modal/my-modal.component';

@Component({
  selector: 'app-administrateur',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
  ],
  templateUrl: './administrateur.component.html',
  styleUrl: './administrateur.component.scss',
})
export class AdministrateurComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'role',
    'naissance',
    'register',
    'action',
  ];

  dataSource: MatTableDataSource<ListUser>;

  constructor(
    private userListService: UserListService,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<ListUser>([]);
    this.dataSource.filterPredicate = (data: ListUser, filter: string) => {
      return (
        data.nickname.trim().toLowerCase().includes(filter) ||
        data.email.trim().toLowerCase().includes(filter) ||
        data.niss.trim().toLowerCase().includes(filter)
      );
    };
  }

  ngOnInit(): void {
    this.userListService.getAllUsers().subscribe(
      (data: any) => {
        this.dataSource.data = data.users;
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des utilisateurs:',
          error
        );
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (filterValue !== '') {
      this.dataSource.filter = filterValue;
    } else {
      this.dataSource.filter = '';
    }

    console.log('Données après le filtrage :', this.dataSource.filteredData);
  }
  
  view(id: string) {
    console.log("L'user a été view!");
    console.log('ici id select:', id);
    // select id
    let userSelectId = id;
    localStorage.setItem('userSelectId', userSelectId.toString());

    this.openModal();
  }

  update(id: string) {
    console.log("L'user a été update!");
  }
  onSubmit(formData: any) {
    const updateData = {
      id: formData.id,
      firstname: formData.firstname,
      lastname: formData.lastname,
      niss: formData.niss,
      nickname: formData.nickname,
      email: formData.email,
      address: {
        street: formData.address.street,
        number: formData.address.number,
        city: formData.address.city,
        zip_code: formData.address.zip_code,
      },
      createdAt: formData.createdAt,
      updatedAt: formData.updatedAt,
      userProfile: {
        id: formData.userProfile.id,
        userId: formData.userProfile.userId,
        genre: formData.userProfile.genre,
        orientation: formData.userProfile.orientation,
        size: formData.userProfile.size,
        weight: formData.userProfile.weight,
        penisSize: formData.userProfile.penisSize,
        braCup: formData.userProfile.braCup,
        hairColor: formData.userProfile.hairColor,
        eyeColor: formData.userProfile.eyeColor,
        createdAt: formData.userProfile.createdAt,
        updatedAt: formData.userProfile.updatedAt,
      },
      announce: {
        title: formData.announce.title,
        description: formData.announce.description,
        private: formData.announce.private,
        escort: formData.announce.escort,
        practices: [formData.announce.practices],
        createdAt: formData,
        updatedAt: formData,
      },
    };
  }
  delete(id: string) {
    console.log("L'user a été delete!");
  }

  openModal(): void {
    this.dialog.open(MyModalComponent, {
      width: '550px', // Définir la largeur du modal
    });
  }
}
