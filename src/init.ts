import type { Subject } from './base_types';
import {
  semesterI,
  semesterII,
  semesterIII,
  semesterIV,
  semesterV,
  semesterVI,
} from './content.js';
import type { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addSubject(subject: Subject, semester: number) {
  const info = subject.info as unknown as Prisma.JsonObject;
  const prerequisites = (subject.prerequisites ??
    []) as unknown as Prisma.JsonArray;
  const related = (subject.related ?? []) as unknown as Prisma.JsonArray;
  await prisma.subject.create({
    data: {
      info,
      prerequisites,
      related,
      semester,
    },
  });
}

const neki = await prisma.subject.findMany();
if (neki.length === 0) {
  semesterI.forEach(async (s) => await addSubject(s, 1));
  semesterII.forEach(async (s) => await addSubject(s, 2));
  semesterIII.forEach(async (s) => await addSubject(s, 3));
  semesterIV.forEach(async (s) => await addSubject(s, 4));
  semesterV.forEach(async (s) => await addSubject(s, 5));
  semesterVI.forEach(async (s) => await addSubject(s, 6));
}
