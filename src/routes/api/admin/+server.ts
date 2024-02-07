import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  const { password } = await request.json();

  const pass = env.ADMIN_PASSWORD; // Admin password saved in .env

  if (password !== pass) {
    return json({
      status: 401,
    });
  }

  return json({
    status: 200,
  });
};
