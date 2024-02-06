export interface SubjectInfo {
  name: string;
  code: string | null;
  points?: number;
  type?: SubjectType;
  notTaught?: boolean;
}

export enum SubjectType {
  Mandatory = 'Obvezni predmet',
  Disciplinary = 'Strokovni izbirni predmet',
  Directionary = 'Smerni izbirni predmet',
  Common = 'Splošni izbirni predmet',
}

export interface Subject {
  id?: number;
  info: SubjectInfo;
  prerequisites?: SubjectInfo[];
  related?: SubjectInfo[];
  comments?: Comment[];
  ratings?: number[];
  voteCount?: number;
  semester?: number;
}

export interface Comment {
  id: number;
  content: string;
  approved: boolean;
  createdAt: string;
}
