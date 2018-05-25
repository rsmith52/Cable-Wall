import { Component, Input } from '@angular/core';
import { ICable } from '../cable';
import { IEnd } from '../end';

@Component({
  selector: 'cable-list',
  templateUrl: './cable-list.component.html',
  styleUrls: ['./cable-list.component.css']
})
export class CableListComponent {
  @Input() cables: ICable[];
}
