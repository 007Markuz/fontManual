import { Component, OnInit } from '@angular/core';
import {SessionStoreService} from '../../core/store/session-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private sessionStore: SessionStoreService, private router: Router) { }

  ngOnInit(): void {
  }

  goto(href){
    this.router.navigateByUrl(href );
  }

}
