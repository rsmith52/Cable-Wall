import { IEnd } from './end'

export interface ICategory {
  type: string;
  subCategories: string[];
  endTypes: IEnd[][];
}
