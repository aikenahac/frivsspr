export interface SubjectInfo {
  name: string;
  code: string;
  points?: number;
  type?: SubjectType;
}

export enum SubjectType {
  Mandatory = 'Obvezni predmet',
  Disciplinary = 'Strokovni izbirni predmet',
  Directionary = 'Smerni izbirni predmet',
  Common = 'Splošni izbirni predmet',
}

export interface Subject {
  info: SubjectInfo;
  prerequisites?: SubjectInfo[];
  related?: SubjectInfo[];
}
