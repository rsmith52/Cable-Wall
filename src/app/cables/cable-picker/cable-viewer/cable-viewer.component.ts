import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICable } from '../../cable';
import { IEnd } from '../../end';
import { IEndSelection } from '../../end-selection';

@Component({
  selector: 'cable-viewer',
  templateUrl: './cable-viewer.component.html',
  styleUrls: ['./cable-viewer.component.css']
})
export class CableViewerComponent {
  @Input() cables: ICable[];
  @Input() selectedEnds: IEndSelection[];

  @Output() cableRemoved = new EventEmitter<number>();

  imageSize: number = 150;

  removeEnd(scIndex: number): void {
    this.cableRemoved.emit(scIndex);
  }
}
