export default interface Character {
  id?: number;
  name?: string;
  status?: string;
  image?: string;
  species?: string;
  url?: string;
  gender?: string;
  location?: {
    name: string;
  };
  origin?: {
    name: string;
  };
  todo?: Character[]
}
