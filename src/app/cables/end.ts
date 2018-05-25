export interface IEnd {
  type: string;
  male: boolean;
  rightAngle: boolean;
  powered: boolean;
  imageUrl: string;
}

// Not needed as of now
/*
export class End implements IEnd {

  constructor(public type: string, public male: boolean,
    public rightAngle: boolean, public powered: boolean) {

  }

  // Compares 2 end objects and returns true if they are equal
  endCompare (end1: End, end2: End): boolean {
    if (end1.type.localeCompare(end2.type) == 0 && end1.male == end2.male &&
          end1.rightAngle == end2.rightAngle && end1.powered == end2.powered) {
      return true;
    }
    else {
      return false;
    }
  }
}
*/
