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
  info: SubjectInfo;
  prerequisites?: SubjectInfo[];
  related?: SubjectInfo[];
}

export interface CalculatorSubject {
  name: string;
  code: string | null;
  points: number;
  type: SubjectType;
  isSelected: boolean;
  notTaught?: boolean;
}
