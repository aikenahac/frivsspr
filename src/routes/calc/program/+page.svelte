<script lang="ts">
  import { subjects } from '../../../content';
  import {
    SubjectType,
    SubjectTypeDB,
    type CalculatorSubject,
  } from '$lib/types';
  import CheckableSubject from '$lib/components/CheckableSubject.svelte';

  interface PrerequisiteStatus {
    subject: CalculatorSubject;
    missingSubjects: CalculatorSubject[];
  }

  let totalPoints = 0;

  const studySemesters = [3, 4, 5, 6];
  let parsed: CalculatorSubject[] = subjects
    .filter((subject) => studySemesters.includes(subject.semester))
    .map((subject) => ({ ...subject, isSelected: false }));

  let semesterIIISubjects: CalculatorSubject[] = [];
  let semesterIVSubjects: CalculatorSubject[] = [];
  let semesterVSubjects: CalculatorSubject[] = [];
  let semesterVISubjects: CalculatorSubject[] = [];

  $: subjectById = new Map(parsed.map((subject) => [subject.id, subject]));

  $: semesterIIISubjects = parsed.filter((subject) => subject.semester === 3);
  $: semesterIVSubjects = parsed.filter((subject) => subject.semester === 4);
  $: semesterVSubjects = parsed.filter((subject) => subject.semester === 5);
  $: semesterVISubjects = parsed.filter((subject) => subject.semester === 6);

  function loadMandatorySubjects() {
    parsed.forEach((subject) => {
      if (subject.type === SubjectTypeDB.Mandatory && !subject.isSelected) {
        subject.isSelected = true;
        totalPoints += subject.points ?? 0;
      }
    });

    parsed = [...parsed];
  }

  function toggleSubject(subject: CalculatorSubject) {
    subject.isSelected = !subject.isSelected;

    if (subject.points) {
      totalPoints += subject.isSelected ? subject.points : -subject.points;
    }

    parsed = [...parsed];
  }

  function getMissingPrerequisites(
    subject: CalculatorSubject,
  ): CalculatorSubject[] {
    if (!subject.prerequisites || subject.prerequisites.length === 0) {
      return [];
    }

    return subject.prerequisites
      .map((prerequisiteId) => subjectById.get(prerequisiteId))
      .filter(
        (prerequisite): prerequisite is CalculatorSubject =>
          !!prerequisite && !prerequisite.isSelected,
      );
  }

  $: selectedDirectionaryCount = parsed.filter(
    (subject) =>
      subject.isSelected && subject.type === SubjectTypeDB.Directionary,
  ).length;

  $: selectedSubjectsWithPrerequisites = parsed.filter(
    (subject) =>
      subject.isSelected &&
      !!subject.prerequisites &&
      subject.prerequisites.length > 0,
  );

  $: prerequisiteStatuses = selectedSubjectsWithPrerequisites.map(
    (subject): PrerequisiteStatus => ({
      subject,
      missingSubjects: getMissingPrerequisites(subject),
    }),
  );

  $: missingPrerequisiteIds = new Set(
    prerequisiteStatuses
      .flatMap((status) => status.missingSubjects)
      .map((subject) => subject.id),
  );

  $: hasAllPrerequisitesSelected = prerequisiteStatuses.every(
    (status) => status.missingSubjects.length === 0,
  );

  loadMandatorySubjects();
</script>

<svelte:head>
  <title>Kalkulator KT - Celoten program</title>
</svelte:head>

<body>
  <h1 class="font-['Klavila'] font-bold py-5 text-5xl">
    Kalkulator KT (2. in 3. letnik)
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

  <div class="sticky top-3 z-20 mt-4 space-y-3">
    <div class="p-4 rounded-box bg-base-200 border border-base-300 shadow-md">
      <p class="font-bold text-xl">
        Tekom študija moraš imeti opravljena vsaj dva smerna predmeta (modra
        barva).
      </p>
      <p class="text-2xl mt-3">Skupno: {totalPoints}/120 KT</p>
      <p class="text-xl mt-2">
        Smerni predmeti: {selectedDirectionaryCount}/2
        {#if selectedDirectionaryCount >= 2}
          <span class="text-success font-bold">(Pogoj izpolnjen)</span>
        {:else}
          <span class="text-error font-bold"
            >(Manjka še {2 - selectedDirectionaryCount})</span
          >
        {/if}
      </p>

      <div class="w-full bg-gray-600 h-0.5 rounded-full my-4" />

      <div
        class="p-4 rounded-box bg-base-100 border border-base-300 shadow-md max-h-[50vh] overflow-y-auto"
      >
        <h3 class="text-xl font-bold mb-2">Predpogoji</h3>
        {#if prerequisiteStatuses.length === 0}
          <p>Izberi predmet s predpogoji, da preveriš stanje.</p>
        {:else if hasAllPrerequisitesSelected}
          <p class="text-success font-bold">
            Za izbrane predmete so vsi predpogoji zbrani.
          </p>
        {:else}
          {#each prerequisiteStatuses as status}
            {#if status.missingSubjects.length > 0}
              <p class="text-error mb-1">
                <span class="font-bold">{status.subject.name}</span>: manjkajo
                {status.missingSubjects
                  .map((subject) => subject.name)
                  .join(', ')}
              </p>
            {:else}
              <p class="text-success mb-1">
                <span class="font-bold">{status.subject.name}</span>: predpogoji
                so zbrani
              </p>
            {/if}
          {/each}
        {/if}
      </div>
    </div>
  </div>

  <div class="divider">III. semester</div>
  {#each semesterIIISubjects as subject}
    <CheckableSubject
      {subject}
      selectSubject={toggleSubject}
      isHighlightedPrerequisite={missingPrerequisiteIds.has(subject.id)}
    />
  {/each}
  <div class="divider">IV. semester</div>
  {#each semesterIVSubjects as subject}
    <CheckableSubject
      {subject}
      selectSubject={toggleSubject}
      isHighlightedPrerequisite={missingPrerequisiteIds.has(subject.id)}
    />
  {/each}
  <div class="divider">V. semester</div>
  {#each semesterVSubjects as subject}
    <CheckableSubject
      {subject}
      selectSubject={toggleSubject}
      isHighlightedPrerequisite={missingPrerequisiteIds.has(subject.id)}
    />
  {/each}
  <div class="divider">VI. semester</div>
  {#each semesterVISubjects as subject}
    <CheckableSubject
      {subject}
      selectSubject={toggleSubject}
      isHighlightedPrerequisite={missingPrerequisiteIds.has(subject.id)}
    />
  {/each}
</body>
