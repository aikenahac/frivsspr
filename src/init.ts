import { subjects } from './content.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

console.log(subjects.length);
const existing = await prisma.subject.findMany();
if (existing.length === 0) {
  let loadCounter = 0;
  subjects.forEach(async (s) => {
    const { id, name, code, points, type, notTaught, semester } = s;

    try {
      await prisma.subject.create({
        data: {
          id,
          name,
          code,
          points,
          type,
          notTaught,
          semester,
        },
      });
    } catch (e) {
      console.log(`Napaka pri ${s.name}`);
      // console.log(e);
    }
    loadCounter++;
    if (loadCounter === subjects.length) {
      connectRelatedAndPrerequisites();
    }
  });
}

function connectRelatedAndPrerequisites() {
  subjects.forEach((s) => {
    s.prerequisites?.forEach(async (pr) => {
      try {
        await prisma.subject.update({
          where: {
            id: s.id,
          },
          data: {
            prerequisites: {
              connect: {
                id: pr,
              },
            },
          },
        });
      } catch (e) {
        console.log(`Napaka conn (pr): ${pr} -> ${s.name} (${s.id})`);
        // console.log(e);
      }
    });

    s.related?.forEach(async (re) => {
      try {
        await prisma.subject.update({
          where: {
            id: s.id,
          },
          data: {
            related: {
              connect: {
                id: re,
              },
            },
          },
        });
      } catch (e) {
        console.log(`Napaka conn (re): ${re} -> ${s.name} (${s.id})`);
        // console.log(e);
      }
    });
  });
}
