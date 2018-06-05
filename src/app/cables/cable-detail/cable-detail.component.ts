import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cable-detail',
  templateUrl: './cable-detail.component.html',
  styleUrls: ['./cable-detail.component.css']
})
export class CableDetailComponent implements OnInit {

  title: string = "Product Detail";

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    let itemNumber = +this._route.snapshot.paramMap.get('itemNumber');
    this.title += `: ${itemNumber}`;
  }

  onBack(): void {
    this._router.navigate(['/cables']);
  }
}
