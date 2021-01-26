type Category = 'daiginjo' | 'ginjo' | 'nigori' | 'junmai' | 'honjozo';

export class Sake {
  id: number;
  name: string;
  category: Category;
  company: string;
  alcohol: string;
  region: string;
  flavors?: string[];
}
