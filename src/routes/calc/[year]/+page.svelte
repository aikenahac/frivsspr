<script lang="ts">
  import { page } from '$app/stores';
  import { subjects } from '../../../content';
  import {
    SubjectType,
    SubjectTypeDB,
    type CalculatorSubject,
  } from '$lib/types';
  import CheckableSubject from '$lib/components/CheckableSubject.svelte';

  const year = $page.params.year;
  let totalPoints = 0;

  const parsed = subjects.map((s) => {
    let p: CalculatorSubject = {
      ...s,
      isSelected: false,
    };

    return p;
  });

  const semesterIIISubjects: CalculatorSubject[] = parsed.filter(
    (s) => s.semester === 3,
  );
  const semesterIVSubjects: CalculatorSubject[] = parsed.filter(
    (s) => s.semester === 4,
  );
  const semesterVSubjects: CalculatorSubject[] = parsed.filter(
    (s) => s.semester === 5,
  );
  const semesterVISubjects: CalculatorSubject[] = parsed.filter(
    (s) => s.semester === 6,
  );

  function checkMandatoryInSemester(semester: CalculatorSubject[]) {
    semester.forEach((s) => {
      if (s.type === SubjectTypeDB.Mandatory) {
        totalPoints += s.points ?? 0;
        s.isSelected = true;
      }
    });
  }

  function loadMandatory() {
    if (year === '2') {
      checkMandatoryInSemester(semesterIIISubjects);
      checkMandatoryInSemester(semesterIVSubjects);
    } else if (year === '3') {
      checkMandatoryInSemester(semesterVSubjects);
      checkMandatoryInSemester(semesterVISubjects);
    }
  }

  function getSelective(semester: CalculatorSubject[]): CalculatorSubject[] {
    const selective: CalculatorSubject[] = [];

    semester.forEach((s) => {
      if (
        s.type === SubjectTypeDB.Directionary ||
        s.type === SubjectTypeDB.Disciplinary
      ) {
        selective.push(s);
      }
    });

    return selective;
  }

  loadMandatory();
</script>

<body>
  <h1 class="font-['Klavila'] font-bold py-5 text-5xl">
    Kalkulator KT ({year}. letnik)
  </h1>
  <h2 class="font-['Klavila'] font-bold py-5 text-2xl">Legenda:</h2>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex flex-column items-center">
      <div class="avatar">
        <div class="bg-base-content rounded-full w-12" />
      </div>
      <div class="divider lg:divider-horizontal" />
      <p>{SubjectType.Mandatory}</p>
    </div>
    <div class="flex flex-column items-center">
      <div class="avatar">
        <div class="bg-warning rounded-full w-12" />
      </div>
      <div class="divider lg:divider-horizontal" />
      <p>{SubjectType.Disciplinary}</p>
    </div>
    <div class="flex flex-column items-center">
      <div class="avatar">
        <div class="bg-info rounded-full w-12" />
      </div>
      <div class="divider lg:divider-horizontal" />
      <p>{SubjectType.Directionary}</p>
    </div>
    <div class="flex flex-column items-center">
      <div class="avatar">
        <div class="bg-success rounded-full w-12" />
      </div>
      <div class="divider lg:divider-horizontal" />
      <p>{SubjectType.Common}</p>
    </div>
  </div>
  <br />
  <p class="font-bold text-2xl">
    Tekom študija na faksu, moraš imeti opravljena vsaj dva smerna predmeta
    (modra barva)
  </p>
  <br />
  <p class="text-2xl">Skupno: {totalPoints}/60 KT</p>

  <br />
  {#if year === '2'}
    <div class="divider">III. semester</div>
    {#each semesterIIISubjects as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          if (subject.points)
            totalPoints += subject.isSelected
              ? subject.points
              : -subject.points;
        }}
      />
    {/each}
    <div class="divider">IV. semester</div>
    {#each semesterIVSubjects as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          if (subject.points)
            totalPoints += subject.isSelected
              ? subject.points
              : -subject.points;
        }}
      />
    {/each}
  {:else if year === '3'}
    <div class="divider">III. semester</div>
    {#each getSelective(semesterIIISubjects) as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          if (subject.points)
            totalPoints += subject.isSelected
              ? subject.points
              : -subject.points;
        }}
      />
    {/each}
    <div class="divider">IV. semester</div>
    <div class="divider">(Po predhodnem dogovoru z referatom)</div>
    {#each getSelective(semesterIVSubjects) as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          if (subject.points)
            totalPoints += subject.isSelected
              ? subject.points
              : -subject.points;
        }}
      />
    {/each}
    <div class="divider">V. semester</div>
    {#each semesterVSubjects as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          if (subject.points)
            totalPoints += subject.isSelected
              ? subject.points
              : -subject.points;
        }}
      />
    {/each}
    <div class="divider">VI. semester</div>
    {#each semesterVISubjects as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          if (subject.points)
            totalPoints += subject.isSelected
              ? subject.points
              : -subject.points;
        }}
      />
    {/each}
  {:else}
    <p>Letnik ne obstaja</p>
  {/if}
</body>
