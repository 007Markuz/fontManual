import { Injectable } from '@angular/core';
import { Category } from '../module/category';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import {CategorisService} from '../service/categoris.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryStoreService {
  list: Observable<Category[]>;
  constructor(private categorisService:CategorisService) { }

  load(id){

    this.list = this.categorisService.resolveItems(id);

  }



}
