import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFilterOption } from '../interface/filter-option.interface';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() title: string;
  @Input('values') filterArr:Array<IFilterOption>;

  @Output() selectedValue: EventEmitter<number | string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public filterClicked(val) {

    this.filterArr.forEach(item => {
      if(item.value !== val.value) {
        item.isActive = false;
      }
    })

    if( val.isActive) {
      // remove filter
      this.selectedValue.emit(null);
    } else {
      // add new filter
      this.selectedValue.emit(val.value);
    }

    val.isActive = !val.isActive;

  }

}
