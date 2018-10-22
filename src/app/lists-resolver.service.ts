import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { List, EditList } from './list-model';
import { ListsService } from './lists.service';

@Injectable()
export class ListsResolver implements Resolve<Array<EditList>> {

  constructor(
    private listsService: ListsService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<EditList>> {

    const type = route.url[0].path;
    return this.listsService.getlists().pipe(
      map((lists: Array<EditList>) => {
        return lists = type === 'progressing'
          ? lists.filter((list: EditList) => !list.completed)
          : type === 'completed'
          ? lists.filter((list: EditList) => list.completed)
          : lists;
      })
    );
  }
}
