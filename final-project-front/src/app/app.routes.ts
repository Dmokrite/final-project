import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContentComponent } from './pages/admin/content/content.component';
import { SettingsComponent } from './pages/admin/side-bar/dashboard/settings/settings.component';
import { StatusComponent } from './pages/admin/side-bar/dashboard/status/status.component';
import { EvenementsComponent } from './pages/admin/side-bar/dashboard/evenements/evenements.component';
import { SociauxComponent } from './pages/admin/side-bar/dashboard/sociaux/sociaux.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { AdministrateurComponent } from './pages/admin/side-bar/users/administrateur/administrateur.component';
import { UsersBanniComponent } from './pages/admin/side-bar/users/users-banni/users-banni.component';
import { RoleUsersComponent } from './pages/admin/side-bar/users/role-users/role-users.component';
import { ListUsersComponent } from './pages/admin/side-bar/users/list-users/list-users.component';
import { CheckAnnouncesComponent } from './pages/admin/side-bar/check-announces/check-announces.component';
import { LoginGuard } from './guards/login.guard';
import { AnnounceDetailsComponent } from './pages/announce-details/announce-details.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { AllAnnouncesComponent } from './pages/all-announces/all-announces.component';
import { MyPersonalDataComponent } from './components/myaccount/my-personal-data/my-personal-data.component';
import { MyAdComponent } from './components/myaccount/my-ad/my-ad.component';
import { MyAdvertiserProfilComponent } from './components/myaccount/my-advertiser-profil/my-advertiser-profil.component';
import { ThankComponent } from './pages/thank/thank.component';
import { PratiquesComponent } from './pages/admin/side-bar/pratiques/pratiques.component';
import { LogsComponent } from './pages/admin/side-bar/logs/logs.component';
import { AdminContactComponent } from './pages/admin/side-bar/admin-contact/admin-contact.component';
import { AnnouncesComponent } from "./pages/announces/announces.component";
import { AnnouncesAllComponent } from "./pages/announces-all/announces-all.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    // si user déjà connected, on l'envoie vers /home
    canActivate: [LoginGuard],
  },
  { path: "register", component: RegisterComponent },
  {
    // redirige les requêtes de localhost:4200/ vers localhost:4200/home
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "myaccount",
    component: MyAccountComponent,
    children: [
      {
        path: "personal-data",
        component: MyPersonalDataComponent,
      },
      {
        path: "advertiser-profile",
        component: MyAdvertiserProfilComponent,
      },
      {
        path: "my-announce",
        component: MyAdComponent,
      },
    ],
  },

  { path: "home", component: HomeComponent },
  { path: "myaccount", component: MyAccountComponent },

  {
    path: "all-announces",
    component: AnnouncesAllComponent,
  },
  
  { path: 'all-announcements/:id', component: AnnounceDetailsComponent },

  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "thank", component: ThankComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [adminGuard],
    children: [
      { path: 'dashboard', component: ContentComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'status', component: StatusComponent },
      { path: 'evenements', component: EvenementsComponent },
      { path: 'sociaux', component: SociauxComponent },
      { path: 'listUsers', component: ListUsersComponent },
      { path: 'administrateur', component: AdministrateurComponent },
      { path: 'usersBan', component: UsersBanniComponent },
      { path: 'roleUsers', component: RoleUsersComponent },
      { path: 'checkAnnounces', component: CheckAnnouncesComponent },
      { path: 'pratiques', component: PratiquesComponent },
      { path: 'logs', component: LogsComponent },
      { path: 'contact', component: AdminContactComponent },
    ],
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];
