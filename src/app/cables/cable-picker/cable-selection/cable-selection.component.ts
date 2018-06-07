import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ICable } from '../../cable';
import { IEnd } from '../../end';
import { IBasicEnd } from '../../basic-end';
import { ICategory } from '../../category';

@Component({
  selector: 'cable-selection',
  templateUrl: './cable-selection.component.html',
  styleUrls: ['./cable-selection.component.css']
})
export class CableSelectionComponent implements OnInit {
  @Input() categories: ICategory[];
  @Input() numSubCatagories: number;

  @Output() cableAdded = new EventEmitter<IBasicEnd>();

  display: string[];
  count: number;

  tabs: string[];
  currentTab: number = 0;

  ngOnInit(): void {
    this.tabs = [];
    for (let category of this.categories) {
      this.tabs.push(category.type);
    }
    this.count = 0;
    this.display = [];
    while (this.count < this.numSubCatagories) {
      this.display[this.count] = "none";
      this.count++;
    }
  }

  clicked(tab: number): void {
    this.currentTab = tab;
    this.count = 0;
    while (this.count < this.numSubCatagories) {
      this.display[this.count] = "none";
      this.count++;
    }
  }

  openSub(numSub: number): void {
    if (this.display[numSub].localeCompare("") == 0) {
      this.display[numSub] = "none";
    }
    else {
      this.display[numSub] = "";
    }
  }

  addEnd(cableAdded: IEnd, isMale: boolean): void {
    this.cableAdded.emit({
      "type": cableAdded.type,
      "male": isMale,
      "category": cableAdded.category,
      "subCategory": cableAdded.subCategory
    });
  }

  getSubCategoryIndex(category: number, name: string, index: number): number {
    for (let subCategory of this.categories[category].subCategories) {
      if (name.localeCompare(subCategory) == 0) {
        return index;
      }
      index++;
    }
    return -1;
  }
}
