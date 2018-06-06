import { Component, Input, OnInit } from '@angular/core';
import { ICable } from '../../cable';
import { IEnd } from '../../end';
import { ICategory } from '../../category';

@Component({
  selector: 'cable-selection',
  templateUrl: './cable-selection.component.html',
  styleUrls: ['./cable-selection.component.css']
})
export class CableSelectionComponent implements OnInit {
  @Input() categories: ICategory[];

  tabs: string[];
  currentTab: number = 0;

  ngOnInit(): void {
    this.tabs = [];
    for (let category of this.categories) {
      this.tabs.push(category.type);
    }
    this.tabs.sort();
  }

  clicked(tab: number): void {
    this.currentTab = tab;
  }
}
