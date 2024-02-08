import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import type { Subject, SubjectTypeDB } from '$lib/types';
import { SubjectType } from '$lib/types';

export const load: PageServerLoad = async () => {
  const subjectsPrisma = await prisma.subject.findMany({
    include: {
      prerequisites: true,
      related: true,
    },
  });

  const subjects: Subject[] = [];

  subjectsPrisma.forEach((s) => {
    const subject: Subject = {
      id: s.id,
      name: s.name,
      code: s.code,
      points: s.points,
      type: SubjectType[s.type],
      notTaught: s.notTaught,
      semester: s.semester,
      prerequisites: parseForType(s.prerequisites),
      related: parseForType(s.related),
      ratings: s.ratings,
      voteCount: s.voteCount,
    };

    subjects.push(subject);
  });

  return {
    subjects,
  };
};

function parseForType(subjects: any[]) {
  const parsed: Subject[] = [];

  subjects.forEach((s) => {
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

    parsed.push(subject);
  });

  return parsed;
}
