import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuickSearchService } from '../../services/quick-search.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/quick-search';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';



@Component({
  selector: 'app-quick-search',
  standalone: true,
  imports: [FormsModule, NavbarComponent, HeaderComponent],
  templateUrl: './announces.component.html',
  styleUrl: './announces.component.scss'
})
export class AnnouncesComponent  implements OnInit{

  results: any[] = [];
  selectedGenre: string = '';
  selectedCity: string = '';
  citySuggestions: string[] = [];
  citySet: string[] = [];
  genres: string[] = ["homme", "femme", "autre"]; // Liste des genres possibles
  filteredResults: any[] = [];
  users: User[] = [];
  selectedEscortOrPrivate: string = '';

  constructor(private quickSearchService: QuickSearchService, private router: Router) {}

  initializeCitySet() {
    const citySet = new Set(this.users.map(user => user.address.city.toLowerCase()));
    this.citySet = Array.from(citySet);
  }
  
  ngOnInit() {
    this.quickSearchService.getAllUsers().subscribe(
      (users: User[]) => {
        this.results = users;
        this.filteredResults = users;
        this.initializeCitySet();
      },
      error => console.error('Error fetching users:', error)
    );
  }
  
  filterResults() {
    this.filteredResults = this.results.filter(result => {
      const genreMatch = this.selectedGenre === '' || result.userProfile.genre === this.selectedGenre;
      const cityMatch = this.selectedCity === '' || result.address.city.toLowerCase().includes(this.selectedCity.toLowerCase());
      const privateEscortMatch = this.selectedEscortOrPrivate === '' || (this.selectedEscortOrPrivate === 'private' && result.announce.private) || (this.selectedEscortOrPrivate === 'escort' && result.announce.escort);
      return genreMatch && cityMatch && privateEscortMatch;
    });
  }

  getUniqueCities(users: User[]): string[] {
    const citySet = new Set(users.map(user => user.address.city.toLowerCase()));
    return Array.from(citySet);
  }

  filterCity(event: any) {
    const value = event.target.value.toLowerCase();
    if (value.length >= 3) { // Afficher les suggestions après 3 caractères
      this.citySuggestions = this.citySet.filter(city => city.toLowerCase().startsWith(value));
    } else {
      this.citySuggestions = [];
    }
  }

  selectCity(city: string) {
    this.selectedCity = city;
    this.citySuggestions = [];
    this.filterResults();
  }

  goToDetails(id: number): void {
    this.router.navigate(['/announce', id]);
  }
}