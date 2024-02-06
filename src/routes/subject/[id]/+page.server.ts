import prisma from '$lib/prisma';
import type { Subject } from '$lib/types';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const subject = await prisma.subject.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  return {
    subject: subject as unknown as Subject,
  };
};

export const actions = {
  vote: async (event) => {
    console.log(event);
  },
} satisfies Actions;
