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
  included1: boolean[];
  included2: boolean[];

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

  // returns true if end types match (gender and type only checked) and end1
  // quantity >= end2 quantity
  endSelectionMatch (end1: IEndSelection, end2: IEndSelection): boolean {
    if (this.endCompareGender(end1.end, end2.end) && (end1.quantity - end2.quantity) > -1) {
      return true;
    }
    else return false;
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
    // Selection on only left end
    else if ((this.ends1.length != 0 && this.ends2.length == 0)) {
      // Go through all cables
      for (let cable of this.cables) {
        // Assume cable not a match
        this.scIndex = 0;
        this.included1 = [];
        this.included2 = [];
        // Go through ends of selection
        for (let endSel1 of this.ends1) {
          this.included1.push(false);
          this.included2.push(false);
          // Go through ends of cable's 1st end
          for (let endSel2 of cable.end1) {
            // Check if cable has matching end type, and at least as many
            // as selected
            if (this.endSelectionMatch(endSel2, endSel1)) {
              this.included1[this.scIndex] = true;
            }
          }
          // Go through ends of cable's 2nd end
          for (let endSel2 of cable.end2) {
            if (this.endSelectionMatch(endSel2, endSel1)) {
              this.included2[this.scIndex] = true;
            }
          }
          this.scIndex++;
        }
        // If cable matches, add to shown list
        if (!this.included1.includes(false) || !this.included2.includes(false)) {
          this.shownCables.push(cable);
        }
        // Case: Matches End 1 of cable in list
        // Case: Matches End 2 of cable in list
      }
    }
    // Selection on only right end
    else if ((this.ends1.length == 0 && this.ends2.length != 0)) {
      // Go through all cables
      for (let cable of this.cables) {
        // Assume cable not a match
        this.scIndex = 0;
        this.included1 = [];
        this.included2 = [];
        // Go through ends of selection
        for (let endSel1 of this.ends2) {
          this.included1.push(false);
          this.included2.push(false);
          // Go through ends of cable's 1st end
          for (let endSel2 of cable.end1) {
            // Check if cable has matching end type, and at least as many
            // as selected
            if (this.endSelectionMatch(endSel2, endSel1)) {
              this.included1[this.scIndex] = true;
            }
          }
          // Go through ends of cable's 2nd end
          for (let endSel2 of cable.end2) {
            if (this.endSelectionMatch(endSel2, endSel1)) {
              this.included2[this.scIndex] = true;
            }
          }
          this.scIndex++;
        }
        // If cable matches, add to shown list
        if (!this.included1.includes(false) || !this.included2.includes(false)) {
          this.shownCables.push(cable);
        }
        // Case: Matches End 1 of cable in list
        // Case: Matches End 2 of cable in list
      }
    }
    // Selection on both ends
    else {
      // Case: Left end matches end 1, Right end matches end 2
      // Case: Left end matches end 2, Right end matches end 1
      console.log("unsupported case");
    }
  }
}
