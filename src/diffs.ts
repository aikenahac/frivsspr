import { SubjectLoad } from './base_types';

/**
 * Compares two arrays of SubjectLoad and returns subjects that are new or have changed properties
 * @param oldSubjects - Original array of subjects
 * @param newSubjects - Updated array of subjects
 * @returns Array containing new subjects and subjects with changed properties (with updated values)
 */
export function getSubjectDifferences(
  oldSubjects: Array<SubjectLoad>,
  newSubjects: Array<SubjectLoad>,
): Array<SubjectLoad> {
  const differences: Array<SubjectLoad> = [];

  // Create a map for quick lookup of old subjects by id
  const oldSubjectsMap = new Map<number, SubjectLoad>();
  oldSubjects.forEach((subject) => {
    oldSubjectsMap.set(subject.id, subject);
  });

  // Check each subject in the new array
  for (const newSubject of newSubjects) {
    const oldSubject = oldSubjectsMap.get(newSubject.id);

    // If subject doesn't exist in old array, it's new
    if (!oldSubject) {
      differences.push(newSubject);
      continue;
    }

    // Check if any properties have changed
    if (hasSubjectChanged(oldSubject, newSubject)) {
      // Create a copy with only new related numbers
      const subjectWithNewRelated = {
        ...newSubject,
        related: getNewNumbers(oldSubject.related, newSubject.related),
      };
      differences.push(subjectWithNewRelated);
    }
  }

  return differences;
}

/**
 * Helper function to check if a subject has changed by comparing all properties
 * @param oldSubject - Original subject
 * @param newSubject - Updated subject
 * @returns true if any property has changed, false otherwise
 */
function hasSubjectChanged(
  oldSubject: SubjectLoad,
  newSubject: SubjectLoad,
): boolean {
  // Compare primitive properties
  if (
    oldSubject.name !== newSubject.name ||
    oldSubject.code !== newSubject.code ||
    oldSubject.points !== newSubject.points ||
    oldSubject.type !== newSubject.type ||
    oldSubject.notTaught !== newSubject.notTaught ||
    oldSubject.semester !== newSubject.semester
  ) {
    return true;
  }

  // Compare arrays (prerequisites and related)
  if (!arraysEqual(oldSubject.prerequisites, newSubject.prerequisites)) {
    return true;
  }

  if (!arraysEqual(oldSubject.related, newSubject.related)) {
    return true;
  }

  return false;
}

/**
 * Helper function to compare two arrays for equality
 * @param arr1 - First array (can be undefined)
 * @param arr2 - Second array (can be undefined)
 * @returns true if arrays are equal, false otherwise
 */
function arraysEqual(arr1?: number[], arr2?: number[]): boolean {
  // Handle undefined cases
  if (arr1 === undefined && arr2 === undefined) return true;
  if (arr1 === undefined || arr2 === undefined) return false;

  // Compare lengths
  if (arr1.length !== arr2.length) return false;

  // Sort and compare elements (assumes order doesn't matter)
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();

  return sorted1.every((val, index) => val === sorted2[index]);
}

/**
 * Helper function to get only the new numbers from the second array that don't exist in the first
 * @param oldArray - Original array (can be undefined)
 * @param newArray - Updated array (can be undefined)
 * @returns Array containing only new numbers, or undefined if newArray is undefined
 */
function getNewNumbers(
  oldArray?: number[],
  newArray?: number[],
): number[] | undefined {
  if (newArray === undefined) return undefined;
  if (oldArray === undefined) return newArray;

  return newArray.filter((num) => !oldArray.includes(num));
}
