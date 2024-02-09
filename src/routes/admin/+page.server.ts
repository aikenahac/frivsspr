import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import type { Comment } from '$lib/types';
import { parseSubject } from '$lib/utils';

export const load: PageServerLoad = async () => {
  const commentsPrisma = await prisma.comment.findMany({
    where: {
      approved: false,
    },
    include: {
      subject: true,
    },
  });

  const comments: Comment[] = [];

  commentsPrisma.forEach((c) => {
    const comment: Comment = {
      id: c.id,
      content: c.content,
      approved: c.approved,
      createdAt: c.createdAt.toISOString(),
      subject: undefined,
    };

    comment.subject = parseSubject(c.subject);
    comments.push(comment);
  });

  return {
    comments,
  };
};
