<script lang="ts">
  import { page } from '$app/stores';
  import { semseterIII, semesterIV, semesterV, semesterVI } from '$lib/content';
  import { SubjectType, type CalculatorSubject } from '$lib/types';
  import CheckableSubject from '$lib/components/CheckableSubject.svelte';

  const year = $page.params.year;
  let totalPoints = 0;

  const semesterIIISubjects: CalculatorSubject[] = semseterIII.map((s) => {
    return {
      name: s.info.name,
      code: s.info.code,
      type: s.info.type ?? SubjectType.Mandatory,
      points: s.info.points ?? 0,
      isSelected: false,
    };
  });

  const semesterIVSubjects: CalculatorSubject[] = semesterIV.map((s) => {
    return {
      name: s.info.name,
      code: s.info.code,
      type: s.info.type ?? SubjectType.Mandatory,
      points: s.info.points ?? 0,
      isSelected: false,
    };
  });

  const semesterVSubjects: CalculatorSubject[] = semesterV.map((s) => {
    return {
      name: s.info.name,
      code: s.info.code,
      type: s.info.type ?? SubjectType.Mandatory,
      points: s.info.points ?? 0,
      isSelected: false,
    };
  });
  const semesterVISubjects: CalculatorSubject[] = semesterVI.map((s) => {
    return {
      name: s.info.name,
      code: s.info.code,
      type: s.info.type ?? SubjectType.Mandatory,
      points: s.info.points ?? 0,
      isSelected: false,
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
