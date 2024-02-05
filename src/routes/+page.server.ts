import prisma from '$lib/prisma';
import type { Subject } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const sIp = await prisma.subject.findMany({
    where: {
      semester: 1,
    },
  });
  const sIIp = await prisma.subject.findMany({
    where: {
      semester: 2,
    },
  });
  const sIIIp = await prisma.subject.findMany({
    where: {
      semester: 3,
    },
  });
  const sIVp = await prisma.subject.findMany({
    where: {
      semester: 4,
    },
  });
  const sVp = await prisma.subject.findMany({
    where: {
      semester: 5,
    },
  });
  const sVIp = await prisma.subject.findMany({
    where: {
      semester: 6,
    },
  });

  const semesterI = sIp.map((s) => s as unknown as Subject);
  const semesterII = sIIp.map((s) => s as unknown as Subject);
  const semesterIII = sIIIp.map((s) => s as unknown as Subject);
  const semesterIV = sIVp.map((s) => s as unknown as Subject);
  const semesterV = sVp.map((s) => s as unknown as Subject);
  const semesterVI = sVIp.map((s) => s as unknown as Subject);

  return {
    semesterI,
    semesterII,
    semesterIII,
    semesterIV,
    semesterV,
    semesterVI,
  };
};
