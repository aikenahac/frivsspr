<script lang="ts">
  import { page } from '$app/stores';
  import {
    semesterIII,
    semesterIV,
    semesterV,
    semesterVI,
  } from '../../../content';
  import { SubjectType, type CalculatorSubject } from '$lib/types';
  import CheckableSubject from '$lib/components/CheckableSubject.svelte';

  const year = $page.params.year;
  let totalPoints = 0;

  const semesterIIISubjects: CalculatorSubject[] = semesterIII.map((s) => {
    return {
      name: s.info.name,
      code: s.info.code,
      type: s.info.type ?? SubjectType.Mandatory,
      points: s.info.points ?? 0,
      isSelected: false,
      notTaught: s.info.notTaught,
    };
  });

  const semesterIVSubjects: CalculatorSubject[] = semesterIV.map((s) => {
    return {
      name: s.info.name,
      code: s.info.code,
      type: s.info.type ?? SubjectType.Mandatory,
      points: s.info.points ?? 0,
      isSelected: false,
      notTaught: s.info.notTaught,
    };
  });

  const semesterVSubjects: CalculatorSubject[] = semesterV.map((s) => {
    return {
      name: s.info.name,
      code: s.info.code,
      type: s.info.type ?? SubjectType.Mandatory,
      points: s.info.points ?? 0,
      isSelected: false,
      notTaught: s.info.notTaught,
    };
  });
  const semesterVISubjects: CalculatorSubject[] = semesterVI.map((s) => {
    return {
      name: s.info.name,
      code: s.info.code,
      type: s.info.type ?? SubjectType.Mandatory,
      points: s.info.points ?? 0,
      isSelected: false,
      notTaught: s.info.notTaught,
    };
  });

  function checkMandatoryInSemester(semester: CalculatorSubject[]) {
    semester.forEach((s) => {
      if (s.type === SubjectType.Mandatory) {
        totalPoints += s.points;
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
        s.type === SubjectType.Directionary ||
        s.type === SubjectType.Disciplinary
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
  <p class="text-2xl">Skupno: {totalPoints}/60 KT</p>

  <br />
  {#if year === '2'}
    <div class="divider">III. semester</div>
    {#each semesterIIISubjects as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          totalPoints += subject.isSelected ? subject.points : -subject.points;
        }}
      />
    {/each}
    <div class="divider">IV. semester</div>
    {#each semesterIVSubjects as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          totalPoints += subject.isSelected ? subject.points : -subject.points;
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
          totalPoints += subject.isSelected ? subject.points : -subject.points;
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
          totalPoints += subject.isSelected ? subject.points : -subject.points;
        }}
      />
    {/each}
    <div class="divider">V. semester</div>
    {#each semesterVSubjects as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          totalPoints += subject.isSelected ? subject.points : -subject.points;
        }}
      />
    {/each}
    <div class="divider">VI. semester</div>
    {#each semesterVISubjects as subject}
      <CheckableSubject
        {subject}
        selectSubject={() => {
          subject.isSelected = !subject.isSelected;
          totalPoints += subject.isSelected ? subject.points : -subject.points;
        }}
      />
    {/each}
  {:else}
    <p>Letnik ne obstaja</p>
  {/if}
</body>
