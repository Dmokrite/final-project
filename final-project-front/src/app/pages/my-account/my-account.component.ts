import { Component, NgModule, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MyAdComponent } from '../../components/myaccount/my-ad/my-ad.component';
import { MyPersonalDataComponent } from '../../components/myaccount/my-personal-data/my-personal-data.component';
import { MyAdvertiserProfilComponent } from '../../components/myaccount/my-advertiser-profil/my-advertiser-profil.component';


@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, RouterModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})
export class MyAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MyAccountComponent,
        children: [
          { path: 'personal-data', component: MyPersonalDataComponent },
          { path: 'advertiser-profile', component: MyAdvertiserProfilComponent },
          { path: 'my-ad', component: MyAdComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }