import { IEndSelection } from './end-selection'

export interface ICable {
  itemNumber: number;
  UPC: number;
  price: number;
  quantity: number;

  name: string;
  brand: string;
  length: string;
  color: string;

  location: string;
  end1: IEndSelection[];
  end2: IEndSelection[];

}
