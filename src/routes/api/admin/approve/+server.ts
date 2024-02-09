import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/prisma';

export const PUT: RequestHandler = async ({ request }) => {
  const { id, password } = await request.json();

  const pass = env.ADMIN_PASSWORD; // Admin password saved in .env

  if (password !== pass) {
    return json({
      status: 401,
    });
  }

  await prisma.comment.update({
    where: {
      id,
    },
    data: {
      approved: true,
    },
  });

  return json({
    status: 200,
  });
};
