import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/prisma';

export const POST: RequestHandler = async ({ request }) => {
  const { id, content } = await request.json();

  await prisma.subject.update({
    where: {
      id,
    },
    data: {
      comments: {
        create: {
          content,
        },
      },
    },
  });

  return json(204);
};
