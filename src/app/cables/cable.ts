import { IEnd } from './end'

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
  end1: IEnd[];
  end2: IEnd[];

}
