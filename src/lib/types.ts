export type { Subject, SubjectInfo, Comment } from '../base_types';
export { SubjectType } from '../base_types';
import type { SubjectType } from '../base_types';

export interface CalculatorSubject {
  name: string;
  code: string | null;
  points: number;
  type: SubjectType;
  isSelected: boolean;
  notTaught?: boolean;
}
