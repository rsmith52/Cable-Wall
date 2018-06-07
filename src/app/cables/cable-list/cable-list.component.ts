import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange, DoCheck } from '@angular/core';
import { ICable } from '../cable';
import { IEnd } from '../end';
import { IEndSelection } from '../end-selection';

@Component({
  selector: 'cable-list',
  templateUrl: './cable-list.component.html',
  styleUrls: ['./cable-list.component.css']
})
export class CableListComponent implements OnInit, OnChanges, DoCheck {
  @Input() cables: ICable[];
  @Input() ends1: IEndSelection[];
  @Input() ends2: IEndSelection[];
  shownCables: ICable[] = [];

  scIndex: number;
  found: boolean;

  ngOnInit (): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  ngDoCheck(): void {
    this.filterList();
  }

  endCompareGender (end1: IEnd, end2: IEnd): boolean {
    if (end1.type.localeCompare(end2.type) == 0 && end1.male == end2.male) {
      return true;
    }
    else {
      return false;
    }
  }

  filterList(): void {
    // Clear list
    this.shownCables = [];
    // None selected
    if (this.ends1.length == 0 && this.ends2.length == 0) {
      for (let cable of this.cables) {
        this.shownCables.push(cable);
      }
    }
    // Selection on only one end
    else if ((this.ends1.length == 0 && this.ends2.length != 0) ||
        (this.ends1.length != 0 && this.ends2.length == 0)) {
      // Case: Matches End 1 of cable in list
      // Case: Matches End 2 of cable in list
    }
    // Selection on both ends
    else {
      // Case: Left end matches end 1, Right end matches end 2
      // Case: Left end matches end 2, Right end matches end 1
    }
  }
}
