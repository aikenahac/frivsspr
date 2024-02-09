import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/prisma';

export const POST: RequestHandler = async ({ request }) => {
  const { id, vote } = await request.json();

  const update = await prisma.subject.update({
    where: {
      id,
    },
    data: {
      ratings: {
        push: vote,
      },
      voteCount: {
        increment: 1,
      },
    },
  });

  const count = update.voteCount;
  const newRating = update.ratings.reduce((a, c) => a + c, 0) / count;

  return json({ newRating, count });
};
