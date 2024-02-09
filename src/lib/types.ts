export type { Subject, SubjectLoad, Comment } from '../base_types';
export { SubjectType, SubjectTypeDB } from '../base_types';
import type { SubjectLoad } from '../base_types';

export interface CalculatorSubject extends SubjectLoad {
  isSelected: boolean;
}
