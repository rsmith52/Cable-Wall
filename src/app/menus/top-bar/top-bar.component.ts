import { Component } from '@angular/core';

@Component ({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  globalBarContent: string = "UNIVERSITY of WISCONSIN-MADISON";
  logoUrl: string = "../../../assets/images/logos/TS-logo.jpg";

  menuItems: string[] = [
    "Cable Picker", "Cable List", "Cable Wall Map"
  ];
}
