import { Component, OnInit } from '@angular/core';
import { ICable } from '../cable';
import { IEnd } from '../end';
import { IBasicEnd } from '../basic-end';
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
  endsSimple: IEnd[];
  // used in initialization
  included: boolean;
  includedSimple: boolean;

  //List of all categories
  categories: ICategory[];
  // used in initialization
  newCategory: ICategory;
  numSubCatagories: number;

  // currently selected end types
  end1: IEndSelection[] = [];
  end2: IEndSelection[] = [];
  // used when adding new end
  newEnd: IEnd;

  // temp test variable to print categories/ends
  scIndex: number;

  // Methods //

  // initialize lists and selections
  ngOnInit (): void {

    this.setTestCables();
    this.getEnds();
    this.getCategories(0);
    //this.setTestEnds();

/*
    for (let category of this.categories) {
      console.log(category.type);
      this.scIndex = 0;
      for (let subCategory of category.subCategories) {
        console.log("___" + subCategory);
        for (let endType of category.endTypes[this.scIndex]) {
          console.log("______" + endType.type);
        }
        this.scIndex++;
      }
    }
*/

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
        "location": "A-02",
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
        "location": "B-01",
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
            }
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
    this.endsSimple = [];
    // create list of end types
    for (let cable of this.cables) {
      for (let end1 of cable.end1) {
        this.included = false;
        this.includedSimple = false;
        for (let end2 of this.ends) {
          if (this.endCompareGender(end1.end, end2)) {
            this.included = true;
          }
          if (this.endCompareSimple(end1.end, end2)) {
            this.includedSimple = true;
          }
        }
        if (!this.included) {
          this.ends.push(end1.end);
        }
        if (!this.includedSimple) {
          this.endsSimple.push(end1.end);
        }
      }
      for (let end1 of cable.end2) {
        this.included = false;
        this.includedSimple = false;
        for (let end2 of this.ends) {
          if (this.endCompareGender(end1.end, end2)) {
            this.included = true;
          }
          if (this.endCompareSimple(end1.end, end2)) {
            this.includedSimple = true;
          }
        }
        if (!this.included) {
          this.ends.push(end1.end);
        }
        if (!this.includedSimple) {
          this.endsSimple.push(end1.end);
        }
      }
    }
  }

  // get all categories and subcategories
  getCategories(cIndex: number): void {
    // Create empty array for categories
    this.categories = [];
    // Initialize number of sub catagories to 0
    this.numSubCatagories = 0;
    // Go through each end type found in cables in database
    for (let end of this.endsSimple) {
      //console.log(end.type);
      this.included = false;
      // Check if each cable's category exists yet
      for (let category of this.categories) {
        if (end.category.localeCompare(category.type) == 0) {
          this.included = true;
        }
      }
      // Category doesn't exist yet
      if (!this.included) {
        this.newCategory = {"type": end.category, "subCategories": [], "endTypes": []};
        this.categories.push(this.newCategory);
      }
      // Category already exists
      this.included = false;
      cIndex = 0;
      for (let subCategory of this.categories[this.getCategoryIndex(end.category, 0)].subCategories) {
        if (end.subCategory.localeCompare(subCategory) == 0) {
          this.included = true;
          this.categories[this.getCategoryIndex(end.category, 0)].endTypes[cIndex].push(end);
        }
        cIndex++;
      }
      // SubCategory doesn't exist yet
      if (!this.included) {
        this.categories[this.getCategoryIndex(end.category, 0)].subCategories.push(end.subCategory);
        this.numSubCatagories++;
        this.categories[this.getCategoryIndex(end.category, 0)].endTypes[cIndex] = [];
        this.categories[this.getCategoryIndex(end.category, 0)].endTypes[cIndex].push(end);
      }
    }
  }

  // Called when a cable is added from a cable-selection component
  onAddCable1 (cableAdded: IBasicEnd): void {
    this.newEnd = {
      "type": cableAdded.type,
      "male": cableAdded.male,
      "rightAngle": false,
      "powered": false,
      "imageUrl": "",
      "category": cableAdded.category,
      "subCategory": cableAdded.subCategory
    }
    this.getEndImage (this.newEnd);

    this.included = false;
    this.scIndex = 0;
    for (let end of this.end1) {
      if (this.endCompareGender(end.end, this.newEnd)) {
        this.included = true;
        break;
      }
      this.scIndex++;
    }

    // If end already exists on end1 (index at scIndex)
    if (this.included) {
      this.end1[this.scIndex].quantity++;
    }
    // End not already on end1
    else {
      this.end1.push({
        "end": this.newEnd,
        "quantity": 1
      });
    }
  }
  onAddCable2 (cableAdded: IBasicEnd): void {
    this.newEnd = {
      "type": cableAdded.type,
      "male": cableAdded.male,
      "rightAngle": false,
      "powered": false,
      "imageUrl": "",
      "category": cableAdded.category,
      "subCategory": cableAdded.subCategory
    }
    this.getEndImage (this.newEnd);

    this.included = false;
    this.scIndex = 0;
    for (let end of this.end2) {
      if (this.endCompareGender(end.end, this.newEnd)) {
        this.included = true;
        break;
      }
      this.scIndex++;
    }

    // If end already exists on end1 (index at scIndex)
    if (this.included) {
      this.end2[this.scIndex].quantity++;
    }
    // End not already on end1
    else {
      this.end2.push({
        "end": this.newEnd,
        "quantity": 1
      });
    }
  }

  // Called when a cable is removed from cable viewer Component
  onRemoveCable1 (indexRemoved: number ) {
    // Only one of this end type
    if (this.end1[indexRemoved].quantity == 1) {
      this.end1.splice(indexRemoved, 1);
    }
    // multiple of this end type
    else {
      this.end1[indexRemoved].quantity--;
    }
  }
  onRemoveCable2 (indexRemoved: number ) {
    // Only one of this end type
    if (this.end2[indexRemoved].quantity == 1) {
      this.end2.splice(indexRemoved, 1);
    }
    // multiple of this end type
    else {
      this.end2[indexRemoved].quantity--;
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
  endCompareGender (end1: IEnd, end2: IEnd): boolean {
    if (end1.type.localeCompare(end2.type) == 0 && end1.male == end2.male) {
      return true;
    }
    else {
      return false;
    }
  }
  endCompareSimple (end1: IEnd, end2: IEnd): boolean {
    if (end1.type.localeCompare(end2.type) == 0) {
      return true;
    }
    else return false;
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

  getEndImage (end: IEnd): void {
    if (end.male) {
      end.imageUrl = "../assets/images/cables/" + end.category.toLowerCase() +
          "/" + end.subCategory.toLowerCase() + "/" +
          end.type.toLowerCase() + "/male.png";
    }
    else {
      end.imageUrl = "../assets/images/cables/" + end.category.toLowerCase() +
          "/" + end.subCategory.toLowerCase() + "/" +
          end.type.toLowerCase() + "/female.png";
    }
  }
}
