<script lang="ts">
  import { page } from '$app/stores';
  import { semseterIII, semesterIV, semesterV, semesterVI } from '$lib/content';
  import { SubjectType, type CalculatorSubject } from '$lib/types';
  import addIcon from '$lib/assets/add.svg';
  import CheckableSubject from '$lib/components/CheckableSubject.svelte';
  import { onMount } from 'svelte';

  const year = $page.params.year;
  let totalPoints = 0;

  // Za drugi letnik kalkulator ma od druzga letnika predmete
  // Za tretji letnik kalkulator ma od tretga letnika predmete

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
  <div class="flex justify-center items-center">
    <div class="container">
      <h1 class="title main-title">Kalkulator KT ({year}. letnik)</h1>
      <p class="total-points">Skupno: {totalPoints} KT</p>

      <br />
      {#if year === '2'}
        <div class="divider">III. semester</div>
        {#each semesterIIISubjects as subject}
          <CheckableSubject
            {subject}
            selectSubject={() => {
              subject.isSelected = !subject.isSelected;
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
              totalPoints += subject.isSelected
                ? subject.points
                : -subject.points;
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
              totalPoints += subject.isSelected
                ? subject.points
                : -subject.points;
            }}
          />
        {/each}
      {:else}
        <p>Letnik ne obstaja</p>
      {/if}
    </div>
  </div>
</body>

<style>
  @font-face {
    font-family: 'Klavila';
    src: url('../../../lib/fonts/klavika.otf') format('opentype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Klavila';
    src: url('../../../lib/fonts/klavika-bold.otf') format('opentype');
    font-weight: bold;
  }

  * {
    font-family: Verdana, sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    width: 60vw;
    min-height: 100vh;
  }

  .title {
    font-family: 'Klavila';
    font-weight: bold;
    padding: 20px 0 20px 0;
  }

  .main-title {
    font-size: 3rem;
  }

  .total-points {
    font-size: 2rem;
  }
</style>
