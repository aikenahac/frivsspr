import prisma from "$lib/prisma";
import { SubjectLoad, SubjectTypeDB } from "$lib/types";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { subjects } from "../../../../content";
import { getSubjectDifferences } from "../../../../diffs";

export const GET: RequestHandler = async ({ request }) => {
  try {
    const subjectsPrisma = await prisma.subject.findMany({
      select: {
        id: true,
        name: true,
        code: true,
        points: true,
        type: true,
        notTaught: true,
        semester: true,
        related: {
          select: {
            id: true,
          }
        }
      },
    });

    const oldSubjects: SubjectLoad[] = subjectsPrisma.map((sub) => ({
      ...sub,
      type: sub.type.toString() as SubjectTypeDB,
      related: sub.related.map((r) => r.id)
    })).sort((a, b) => a.id - b.id);

    const newSubjects = subjects.map((sub) => ({
      ...sub,
      notTaught: !!sub.notTaught ? sub.notTaught : null,
      related: !!sub.related ? sub.related.map((r) => r) : []
    })).sort((a, b) => a.id - b.id);

    const diffed = getSubjectDifferences(oldSubjects, newSubjects).sort((a, b) => a.id - b.id);

    diffed.forEach(async (subject) => {
      try {
        await prisma.subject.upsert({
          where: {
            id: subject.id,
          },
          update: {
            name: subject.name,
            code: subject.code,
            points: subject.points,
            type: subject.type,
            notTaught: subject.notTaught,
            semester: subject.semester,
          },
          create: {
            id: subject.id,
            name: subject.name,
            code: subject.code,
            points: subject.points,
            type: subject.type,
            notTaught: subject.notTaught,
            semester: subject.semester,
          },
        });
        console.log(`Success update/create (sub) -> ${subject.name} (${subject.id})`);
      } catch (e) {
        console.log(`Error update/create (sub) -> ${subject.name} (${subject.id})`);
      }

      subject.related?.forEach(async (re) => {
        try {
          await prisma.subject.update({
            where: {
              id: subject.id,
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
          console.log(`Error conn (re): ${re} -> ${subject.name} (${subject.id})`);
        }
      });

    })

    return json({
      status: 200,
    });
  } catch (err) {
    return json({
      status: 500,
      data: err,
    });
  }

}
