export interface SubjectInfo {
  name: string;
  code: string;
}

export interface Subject {
  info: SubjectInfo;
  prerequisite?: SubjectInfo;
  related?: SubjectInfo[];
}
