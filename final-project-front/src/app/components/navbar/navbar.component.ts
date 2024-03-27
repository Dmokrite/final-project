import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  nickname: string | null = null;
  isScrolled: boolean = false;
  isadmin: string | null = null;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  ngOnInit() {
    //this.nickname = sessionStorage.getItem("nickname"); (ne refresh pas la page après la connexion ;( !)
    this.nickname = this.authService.getUserNickname();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.isScrolled = window.scrollY > 0; // Adjust threshold as needed
  }

  logOut() {
    sessionStorage.clear();
    localStorage.clear();
  }

  logIn() {
    this.router.navigate(['/login']);
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        if (result === 'logout') {
          this.logOut();
          this.router.navigate(['/home']);
          window.location.reload();
        }
        if (result === 'login') {
          this.logIn();
          this.router.navigate(['/login']);
          window.location.reload();
        }
      },
      (reason) => {}
    );
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isAdmin() {
    const isAdmin = localStorage.getItem('isadmin');
    if (isAdmin) {
      return isAdmin;
    }
    return null;
  }
}
