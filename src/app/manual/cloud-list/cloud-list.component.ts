import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Observable } from 'rxjs';
import { CategoryStoreService} from '../../core/store/category-store.service';
import { Category} from '../../core/module/category';

import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cloud-list',
  templateUrl: './cloud-list.component.html',
  styleUrls: ['./cloud-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CloudListComponent implements OnInit {

  dataSource: Observable<Category[]>;
  columnsToDisplay = ['name',  'position'];
  expandedElement: Category | null;
  constructor( public categoriStore:CategoryStoreService,private router: Router,private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=> {
      this.categoriStore.load(params.id );


    });


  }

  goTo( id ) {

      this.categoriStore.load(id );



  }

}
