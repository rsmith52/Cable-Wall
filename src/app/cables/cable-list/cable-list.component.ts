import { Component, Input, OnInit } from '@angular/core';
import { ICable } from '../cable';
import { IEnd } from '../end';

@Component({
  selector: 'cable-list',
  templateUrl: './cable-list.component.html',
  styleUrls: ['./cable-list.component.css']
})
export class CableListComponent implements OnInit {
  @Input() cables: ICable[];
  shownCables: ICable[] = [];

  ngOnInit (): void {
    //this.shownCables = Object.assign({}, this.cables);
    console.log(this.shownCables.length);
  }
}
