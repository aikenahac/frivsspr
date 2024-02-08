import { type Subject, SubjectType, type SubjectTypeDB } from '$lib/types';
import moment from 'moment';

export function readableDate(date: string): string {
  const formatted = moment(date, 'YYYY-MM-DD').format('ddd, D. MMMM YYYY');
  return formatted.endsWith('.') ? formatted.slice(0, -1) : formatted;
}

export function parseForType(subjects: any[]) {
  const parsed: Subject[] = [];

  subjects.forEach((s) => {
    const subject: Subject = parseSubject(s);

    parsed.push(subject);
  });

  return parsed;
}

export function parseSubject(s: any) {
  const subject: Subject = {
    id: s.id,
    name: s.name,
    code: s.code,
    points: s.points,
    type: SubjectType[s.type as unknown as SubjectTypeDB],
    notTaught: s.notTaught,
    semester: s.semester,
    ratings: s.ratings,
    voteCount: s.voteCount,
  };

  return subject;
}
