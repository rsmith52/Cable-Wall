import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICable } from '../cable';
import { IEnd } from '../end';
import { IEndSelection } from '../end-selection';

@Component({
  selector: 'wall-map',
  templateUrl: './wall-map.component.html',
  styleUrls: ['./wall-map.component.css']
})
export class WallMapComponent implements OnInit, OnDestroy {

  private sub: any;

  // list of all cables
  cables: ICable[];
  // current selected spot on wall
  selectedLocation: string;
  // sections (cable wall, separate shelf, ecm cables, etc)
  sections: string[];
  currentSection: number = 0;
  included: boolean;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.selectedLocation = params['location'];
    })
    this.setTestCables();
    this.getSections();

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setTestCables(): void {
    this.cables = [
      {
        "itemNumber": 0,
        "UPC": 0,
        "price": 19.99,
        "quantity": 10,
        "name": "Cable 1",
        "brand": "Brand A",
        "length": "6 ft",
        "color": "black",
        "location": "Cable_Wall: A-01",
        "end1": [
          {
            "end": {
              "type": "HDMI",
              "male": true,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/male.png",
              "category": "Video",
              "subCategory": "HDMI"
            },
            "quantity": 1
          }
        ],
        "end2": [
          {
            "end": {
              "type": "HDMI",
              "male": true,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/male.png",
              "category": "Video",
              "subCategory": "HDMI"
            },
            "quantity": 1
          }
        ]
      },
      {
        "itemNumber": 1,
        "UPC": 1,
        "price": 9.99,
        "quantity": 5,
        "name": "Cable 2",
        "brand": "Brand A",
        "length": "3 ft",
        "color": "black",
        "location": "Cable_Wall: A-02",
        "end1": [
          {
            "end": {
              "type": "HDMI",
              "male": true,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/male.png",
              "category": "Video",
              "subCategory": "HDMI"
            },
            "quantity": 1
          }
        ],
        "end2": [
          {
            "end": {
              "type": "HDMI",
              "male": true,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/male.png",
              "category": "Video",
              "subCategory": "HDMI"
            },
            "quantity": 1
          }
        ]
      },
      {
        "itemNumber": 2,
        "UPC": 2,
        "price": 14.99,
        "quantity": 7,
        "name": "Cable 3",
        "brand": "Brand B",
        "length": "0 in",
        "color": "white",
        "location": "USB_C_Section: 01",
        "end1": [
          {
            "end": {
              "type": "USB-C",
              "male": true,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "../../assets/images/cables/data/usb/type-c/usb-c/male.png",
              "category": "Data",
              "subCategory": "USB"
            },
            "quantity": 1
          }
        ],
        "end2": [
          {
            "end": {
              "type": "HDMI",
              "male": false,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/female.png",
              "category": "Video",
              "subCategory": "HDMI"
            },
            "quantity": 1
          },
          {
            "end": {
              "type": "USB-A-3.0",
              "male": false,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "../../assets/images/cables/data/usb/type-a/usb-a-3/female.png",
              "category": "Data",
              "subCategory": "USB"
            },
            "quantity": 1

          },
          {
            "end": {
              "type": "USB-C",
              "male": false,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "../../assets/images/cables/data/usb/type-c/usb-c/female.png",
              "category": "Data",
              "subCategory": "USB"
            },
            "quantity": 1
          }
        ]
      },
      {
        "itemNumber": 3,
        "UPC": 3,
        "price": 19.99,
        "quantity": 8,
        "name": "Cable 4",
        "brand": "Brand C",
        "length": "3 in",
        "color": "silver",
        "location": "USB_C_Section: 02",
        "end1": [
          {
            "end": {
              "type": "USB-C",
              "male": true,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "",
              "category": "Data",
              "subCategory": "USB"
            },
            "quantity": 1
          }
        ],
        "end2": [
          {
            "end": {
              "type": "USB-A-3.0",
              "male": false,
              "rightAngle": false,
              "powered": false,
              "imageUrl": "",
              "category": "Data",
              "subCategory": "USB"
            },
            "quantity": 3
          }
        ]
      }
    ];
  }

  getSections(): void {
    // Create empty array for sections
    this.sections = [];
    // Go through each cable in database
    for (let cable of this.cables) {
      this.included = false;
      // Check if each cable's section exists yet
      for (let section of this.sections) {
        if (section.localeCompare(this.getSectionName(cable.location)) == 0) {
          this.included = true;
        }
      }
      // Section doesn't exist yet
      if (!this.included) {
        this.sections.push(this.getSectionName(cable.location));
      }
    }
  }

  clickedTab(tab: number): void {
    this.currentSection = tab;
  }

  getSectionName(section: string): string {
    let index = section.indexOf(":");
    section = section.substring(0, index);
    return section;
  }

}
