import { Component, OnInit } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SearchService } from '../../providers/search.service';
import { GlobalFunctions } from '../../globals/functions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search;

  private searchStream = new Subject<string>();

  constructor(
    private provider: SearchService,
    public functions: GlobalFunctions
  ) {}

  ngOnInit() {
    this.searchStream
      .lift(key => this.provider.onFetchSearch(key))
      .subscribe(data => console.log(data));
  }

  onAutoSearch(key: string) {
    if (key !== '') {
      this.provider.onFetchSearch(key).subscribe(data => {
        this.functions.showSnack(data.status , data.message);
        console.log(data);
      });
    }
  }

}
