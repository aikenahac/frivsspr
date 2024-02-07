import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import type { Comment } from '$lib/types';

export const load: PageServerLoad = async () => {
  const comments = await prisma.comment.findMany({
    where: {
      approved: false,
    },
    include: {
      subject: true,
    },
  });

  return {
    comments: comments as unknown as Comment[],
  };
};
