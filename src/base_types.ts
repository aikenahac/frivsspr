export enum SubjectTypeDB {
  Mandatory = 'Mandatory', //'Obvezni predmet',
  Disciplinary = 'Disciplinary', //'Strokovni izbirni predmet',
  Directionary = 'Directionary', //'Smerni izbirni predmet',
  Common = 'Common', //'Splošni izbirni predmet',
}

export enum SubjectType {
  Mandatory = 'Obvezni predmet',
  Disciplinary = 'Strokovni izbirni predmet',
  Directionary = 'Smerni izbirni predmet',
  Common = 'Splošni izbirni predmet',
}

export interface SubjectLoad {
  id: number;

  name: string;
  code: string | null;
  points: number | null;
  type: SubjectTypeDB;
  notTaught?: boolean | null;
  semester: number;

  prerequisites?: number[];
  related?: number[];
  comments?: Comment[];

  ratings?: number[];
  voteCount?: number;
}

export interface Subject {
  id: number;

  name: string;
  code: string | null;
  points: number | null;
  type: SubjectType;
  notTaught: boolean | null;
  semester: number;

  prerequisites?: Subject[];
  related?: Subject[];
  comments?: Comment[];

  ratings: number[];
  voteCount: number;
}

export interface Comment {
  id: number;
  content: string;
  approved: boolean;
  createdAt: string;
  subject?: Subject;
}
