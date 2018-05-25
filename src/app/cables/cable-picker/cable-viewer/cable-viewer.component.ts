import { Component, Input } from '@angular/core';
import { ICable } from '../../cable';
import { IEnd } from '../../end';

@Component({
  selector: 'cable-viewer',
  templateUrl: './cable-viewer.component.html',
  styleUrls: ['./cable-viewer.component.css']
})
export class CableListComponent {
  @Input() cables: ICable[];
}
