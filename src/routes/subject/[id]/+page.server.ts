import prisma from '$lib/prisma';
import { SubjectType, type Subject } from '$lib/types';
import { parseForType } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const s = await prisma.subject.findFirstOrThrow({
    where: {
      id: parseInt(params.id),
    },
    include: {
      prerequisites: true,
      related: true,
      comments: true,
    },
  });

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

  return {
    subject,
  };
};
