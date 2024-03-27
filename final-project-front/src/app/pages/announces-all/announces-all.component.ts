import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HeaderComponent } from "../../components/header/header.component";
import { AnnouncesAllService } from "../../services/announces-all.service";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

export interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  niss: string;
  nickname: string;
  email: string;
  address: {
    street: string;
    number: string;
    city: string;
    zip_code: number;
  };
  createdAt: string;
  updatedAt: string;
  userProfile: {
    id: number;
    userId: number;
    genre: string;
    orientation: string;
    size: number;
    weight: number;
    penisSize: number | null;
    braCup: string | null;
    hairColor: string;
    eyeColor: string;
    createdAt: string;
    updatedAt: string;
  };
  announce: {
    id: number;
    userId: number;
    title: string;
    description: string;
    infidelityCard: boolean;
    private: boolean;
    escort: boolean;
    practices: number[];
    pricing: {
      "15min": number;
      "30min": number;
      "45min": number;
      "60min": number;
    };
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  gallery: {
    id: number;
    userId: number;
    url: string;
    cover: boolean;
  }[];
}

export interface Practice {
  id: number;
  name: string;
}



@Component({
  selector: "app-announces-all",
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: "./announces-all.component.html",
  styleUrl: "./announces-all.component.scss",
})
export class AnnouncesAllComponent implements OnInit {
  annonces: UserData[]=[];
  filteredUsers: UserData[]=[];
  searchCity: string='';
  selectedGender: string='';
  selectedPrivate: string='';
  selectedEscort: string='';
  genders: string[] = ["homme", "femme", "transgenre", "robot", "transexuel", "transformers"];
  defaultAvailabilityFilterValue = "Je me déplace ou je reçois?";
  availabilityFilterValue = "Aucun";
  selectedPractices: number[] = [];
  isPracticesFilterVisible = false;
  practices: Practice[] = [
  { id: 1, name: "Massage classique" },
  { id: 2, name: "Massage Tantra" },
  { id: 3, name: "Massage Nuru" },
  { id: 4, name: "Massage Sensuel" },
  { id: 5, name: "massage + finition" },
  { id: 6, name: "sucer une aubergine humide" },
  { id: 7, name: "sucer une aubergine sèche" },
  { id: 8, name: "sucer un abricot" },
  { id: 9, name: "le doight qui pue" },
  { id: 10, name: "échange de salive post covid" },
  { id: 11, name: "sucer les tétines" },
  { id: 12, name: "jambes en l'air sans protection" },
  { id: 13, name: "double péné sans parler de pâtes" },
  
];

  constructor(private announcesAllService: AnnouncesAllService, private router: Router) {}

  ngOnInit() {
    this.announcesAllService.getAnnouncements().subscribe(
      (data: any) => {
        if (Array.isArray(data.users)) {
          this.annonces = data.users.filter((user: UserData) => user.announce && user.announce.title);
          this.filteredUsers = this.annonces;
          console.log("Données récupérées", this.annonces);
        } else {
          console.error("Data users is not an array:", data.users);
        }
      },
      (error: any) => {
        console.error("Une erreur est survenue", error);
      }
    );
}

getCoverImageUrl(userData: UserData): string | undefined {
  const coverImage = userData.gallery.find(image => image.cover);
  return coverImage?.url; // Use optional chaining to handle cases where no cover image exists
}
togglePracticesFilter() {
  this.isPracticesFilterVisible = !this.isPracticesFilterVisible;
}
resetFilters() {
  this.selectedGender = "";
  this.selectedPractices = [];
  this.searchCity = "";
  this.filteredUsers = this.annonces;
}

 onSearchChange() {
  this.filteredUsers = this.annonces.filter((annonce) => {
    const meetsCityCriteria = !this.searchCity || annonce.address.city.toLowerCase().includes(this.searchCity.toLowerCase());
    const meetsGenderCriteria = !this.selectedGender || annonce.userProfile.genre === this.selectedGender;
    let meetsAvailabilityFilter;
    switch (this.availabilityFilterValue) {
      case "Les deux":
        meetsAvailabilityFilter = true; // Show all for "Les deux"
        break;
      case "private":
        meetsAvailabilityFilter = annonce.announce.private; // Filter by priii: true
        break;
      case "escort":
        meetsAvailabilityFilter = annonce.announce.escort; // Filter by esccc: true
        break;
      default:
        meetsAvailabilityFilter = true; // Default to show all
    }
    const meetsPracticeCriteria = this.selectedPractices.length === 0 ||
      this.selectedPractices.every((practiceId) => annonce.announce.practices.includes(practiceId));

    return meetsCityCriteria && meetsGenderCriteria && meetsAvailabilityFilter && meetsPracticeCriteria;

  });
}

  onGenderChange() {
    this.onSearchChange();
  }

  onAvailabilityChange() {
    this.onSearchChange();
  }

  onEscortPrivateChange() {
    this.onSearchChange();
  }

  onAnnouncementClick(annonce: UserData) {
  const url = `all-announcements/:${annonce.announce.id}`;
  window.open(url, '_blank');
  
}

}