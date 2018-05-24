import { Component } from '@angular/core';

@Component ({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  globalBarContent: string = "UNIVERSITY of WISCONSIN-MADISON";

  logoUrl: string = "../../../assets/images/logos/TS-logo.jpg";
  logoWidth: number = 350;
  logoHeight: number = 50;

  welcomeMessage: string = "Help find your cables";

  menuItems: string[] = [
    "Applesauce", "Cable Picker", "Cable List", "Cable Wall"
  ];
}
