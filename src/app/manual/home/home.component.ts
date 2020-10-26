import { Component, OnInit } from '@angular/core';
import {SessionStoreService} from '../../core/store/session-store.service';
import { Router } from '@angular/router';
import { SidenavService } from '../../core/service/sidenav.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sessionStore: SessionStoreService, private router: Router,private sidenavService:SidenavService) { }

  ngOnInit() {
  }

  goto(){

this.router.navigateByUrl('/cloud-list/' + this.sessionStore.firtsId);
    this.sidenavService.toggle();
  }
}
