import { Component, OnInit } from '@angular/core';
import { ICable } from '../cable';
import { IEnd } from '../end';
import { IEndSelection } from '../end-selection';
import { ICategory } from '../category';

@Component ({
  templateUrl: './cable-picker.component.html',
  styleUrls: ['./cable-picker.component.css']
})
export class CablePickerComponent implements OnInit {
  // Data Fields //

  // list of all cables
  cables: ICable[];

  // list of all end types
  ends: IEnd[];
  // used in initialization
  included: boolean;

  //List of all categories
  categories: ICategory[];
  // used in initialization
  newCategory: ICategory;

  // currently selected end types
  end1: IEndSelection[];
  end2: IEndSelection[];

  // Methods //

  // initialize lists and selections
  ngOnInit (): void {

    this.setTestCables();
    this.getEnds();
    this.getCategories();
    this.setTestEnds();

    return;
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
        "location": "A-01",
        "end1": [
          {
            "type": "HDMI",
            "male": true,
            "rightAngle": false,
            "powered": false,
            "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/male.png",
            "category": "Video",
            "subCategory": "HDMI"
          }
        ],
        "end2": [
          {
            "type": "HDMI",
            "male": true,
            "rightAngle": false,
            "powered": false,
            "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/male.png",
            "category": "Video",
            "subCategory": "HDMI"
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
        "location": "A-02",
        "end1": [
          {
            "type": "HDMI",
            "male": true,
            "rightAngle": false,
            "powered": false,
            "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/male.png",
            "category": "Video",
            "subCategory": "HDMI"
          }
        ],
        "end2": [
          {
            "type": "HDMI",
            "male": true,
            "rightAngle": false,
            "powered": false,
            "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/male.png",
            "category": "Video",
            "subCategory": "HDMI"
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
        "location": "B-01",
        "end1": [
          {
            "type": "USB-C",
            "male": true,
            "rightAngle": false,
            "powered": false,
            "imageUrl": "../../assets/images/cables/data/usb/type-c/usb-c/male.png",
            "category": "Data",
            "subCategory": "USB"
          }
        ],
        "end2": [
          {
            "type": "HDMI",
            "male": false,
            "rightAngle": false,
            "powered": false,
            "imageUrl": "../../assets/images/cables/video/hdmi/hdmi/female.png",
            "category": "Video",
            "subCategory": "HDMI"
          },
          {
            "type": "USB-A 3.0",
            "male": false,
            "rightAngle": false,
            "powered": false,
            "imageUrl": "../../assets/images/cables/data/usb/type-a/usb-a-3/female.png",
            "category": "Data",
            "subCategory": "USB"
          },
          {
            "type": "USB-C",
            "male": false,
            "rightAngle": false,
            "powered": false,
            "imageUrl": "../../assets/images/cables/data/usb/type-c/usb-c/female.png",
            "category": "Data",
            "subCategory": "USB"
          }
        ]
      }
    ];
  }

  setTestEnds(): void {
    this.end1 = [
      {
        "end": this.ends[0],
        "quantity": 1
      }
    ];
    this.end2 = [
      {
        "end": this.ends[1],
        "quantity": 1
      },
      {
        "end": this.ends[2],
        "quantity": 2
      },
      {
        "end": this.ends[3],
        "quantity": 3
      }
    ];
  }

  // get all end types from provided cables
  getEnds(): void {
    this.ends = [];
    // create list of end types
    for (let cable of this.cables) {
      for (let end1 of cable.end1) {
        this.included = false;
        for (let end2 of this.ends) {
          if (this.endCompare(end1, end2)) {
            this.included = true;
          }
        }
        if (!this.included) {
          this.ends.push(end1);
        }
      }
      for (let end1 of cable.end2) {
        this.included = false;
        for (let end2 of this.ends) {
          if (this.endCompare(end1, end2)) {
            this.included = true;
          }
        }
        if (!this.included) {
          this.ends.push(end1);
        }
      }
    }
  }

  // get all categories and subcategories
  getCategories(): void {
    this.categories = [];
    for (let end of this.ends) {
      console.log(end.type);
      this.included = false;
      for (let category of this.categories) {
        if (end.category.localeCompare(category.type) == 0) {
          this.included = true;
        }
      }
      // Category doesn't exist yet
      if (!this.included) {
        this.newCategory = {"type": end.category, "subCategories": []};
        this.newCategory.subCategories.push(end.subCategory);
        this.categories.push(this.newCategory);
      }
      // Category already exists
      else {
        this.included = false;
        for (let subCategory of this.categories[this.getCategoryIndex(end.category, 0)].subCategories) {
          if (end.subCategory.localeCompare(subCategory) == 0) {
            this.included = true;
          }
        }
        // SubCategory doesn't exist yet
        if (!this.included) {
          this.categories[this.getCategoryIndex(end.category, 0)].subCategories.push(end.subCategory);
        }
      }
    }
  }

  // compare 2 end types to determine if they are equivalent
  endCompare (end1: IEnd, end2: IEnd): boolean {
    if (end1.type.localeCompare(end2.type) == 0 && end1.male == end2.male &&
          end1.rightAngle == end2.rightAngle && end1.powered == end2.powered) {
      return true;
    }
    else {
      return false;
    }
  }

  getCategoryIndex(name: string, index: number): number {
    for (let category of this.categories) {
      if (name.localeCompare(category.type) == 0) {
        return index;
      }
      index++;
    }
    return -1;
  }
}
