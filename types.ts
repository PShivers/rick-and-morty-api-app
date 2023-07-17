export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface Episode{
  id:number;
  name: string;
  air_date: string,
  episode: string,
  characters:[Character];
}
