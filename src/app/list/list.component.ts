import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

import { ListsService } from '../lists.service';
import { EditList, List } from '../list-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  result: Array<EditList>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private listsService: ListsService,
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({lists}) => {
      this.result = lists;
    });
  }

  delet(id: string) {
    this.listsService.delet(id).subscribe((res: List) => {
      window.location.reload();
    });
  }

  changeFavo(list: List) {
    list.favorite = !list.favorite;
    this.save(list);
  }

  changeComp( list: List) {
    list.completed = !list.completed;
    this.save(list);
  }

  save(list: List) {
    this.listsService.save(list).subscribe();
  }
}
