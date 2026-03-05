<script lang="ts">
  import SubjectTile from '$lib/components/SubjectTile.svelte';
  import calcIcon from '$lib/assets/calc.svg';
  import { SubjectType, type Subject } from '$lib/types';
  import type { PageData } from './$types';

  function collapseSemester(semester: string) {
    const parent = document.getElementById(semester);

    if (parent) {
      const checkboxes = parent.querySelectorAll('input[type="checkbox"]');

      checkboxes.forEach((c) => {
        const cc = c as HTMLInputElement;

        cc.checked = false;
      });
    }
  }

  export let data: PageData;
  const semesterI: Subject[] = data.subjects.filter((s) => s.semester === 1);
  const semesterII: Subject[] = data.subjects.filter((s) => s.semester === 2);
  const semesterIII: Subject[] = data.subjects.filter((s) => s.semester === 3);
  const semesterIV: Subject[] = data.subjects.filter((s) => s.semester === 4);
  const semesterV: Subject[] = data.subjects.filter((s) => s.semester === 5);
  const semesterVI: Subject[] = data.subjects.filter((s) => s.semester === 6);
</script>

<svelte:head>
  <title>FRI VSŠ Predmetnik</title>
</svelte:head>

<body>
  <h1 class="font-['Klavila'] font-bold py-5 text-5xl">FRI VSŠ Predmetnik</h1>
  <p>
    Ker na FRI spletni strani ni podstrani, ki bi služila kot dober predmetnik,
    je tukaj seznam vseh predmetov na FRI VSŠ izobraževanju
  </p>

  <h2 class="font-['Klavila'] font-bold py-5 text-2xl">Legenda:</h2>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex flex-column items-center gap-1">
      <div class="avatar">
        <div class="bg-base-content rounded-full w-12" />
      </div>
      <div class="divider lg:divider-horizontal" />
      <p>{SubjectType.Mandatory}</p>
    </div>
    <div class="flex flex-column items-center gap-1">
      <div class="avatar">
        <div class="bg-warning rounded-full w-12" />
      </div>
      <div class="divider lg:divider-horizontal" />
      <p>{SubjectType.Disciplinary}</p>
    </div>
    <div class="flex flex-column items-center gap-1">
      <div class="avatar">
        <div class="bg-info rounded-full w-12" />
      </div>
      <div class="divider lg:divider-horizontal" />
      <p>{SubjectType.Directionary}</p>
    </div>
    <div class="flex flex-column items-center gap-1">
      <div class="avatar">
        <div class="bg-success rounded-full w-12" />
      </div>
      <div class="divider lg:divider-horizontal" />
      <p>{SubjectType.Common}</p>
    </div>
  </div>

  <br />
  <p class="font-bold text-xl">
    Tekom študija na faksu, moraš imeti opravljena vsaj dva smerna predmeta
    (modra barva).
  </p>
  <br />

  <p class="text-sm">
    Če ti je predmetnik prišel prav, bi cenil <a
      href="https://www.buymeacoffee.com/aiken.si"
      target="_blank"
      class="text-[#D423C6]">kavico</a
    > ☕️
  </p>
  <br/>

  <div>
    <h2 class="font-['Klavila'] font-bold py-5 text-2xl">1. letnik</h2>
    <ul>
      <li>
        <div class="flex flex-row justify-between items-center">
          <p>I. Semester</p>
          <button class="btn" on:click={() => collapseSemester('first')}
            >Zapri vse</button
          >
        </div>
        <br />
        <ul id="first">
          {#each semesterI as subject}
            <SubjectTile {subject} />
          {/each}
        </ul>
      </li>
      <br />
      <li>
        <div class="flex flex-row justify-between items-center">
          <p>II. Semester</p>
          <button class="btn" on:click={() => collapseSemester('second')}
            >Zapri vse</button
          >
        </div>
        <br />
        <ul id="second">
          {#each semesterII as subject}
            <SubjectTile {subject} />
          {/each}
        </ul>
      </li>
    </ul>
  </div>

  <div>
    <div class="flex flex-row justify-between items-center">
      <h2 class="font-['Klavila'] font-bold py-5 text-2xl">2. letnik</h2>
      <a href="/calc/2"
        ><button class="btn btn-primary"
          >Kalkulator <img src={calcIcon} alt="Calculator icon" /></button
        ></a
      >
    </div>
    <ul>
      <li>
        <div class="flex flex-row justify-between items-center">
          <p>III. Semester</p>
          <button class="btn" on:click={() => collapseSemester('third')}
            >Zapri vse</button
          >
        </div>
        <br />
        <ul id="third">
          {#each semesterIII as subject}
            <SubjectTile {subject} />
          {/each}
        </ul>
      </li>
      <br />
      <li>
        <div class="flex flex-row justify-between items-center">
          <p>IV. Semester</p>
          <button class="btn" on:click={() => collapseSemester('fourth')}
            >Zapri vse</button
          >
        </div>
        <br />
        <ul id="fourth">
          {#each semesterIV as subject}
            <SubjectTile {subject} />
          {/each}
        </ul>
      </li>
    </ul>
  </div>

  <div>
    <div class="flex flex-row justify-between items-center">
      <h2 class="font-['Klavila'] font-bold py-5 text-2xl">3. letnik</h2>
      <a href="/calc/3"
        ><button class="btn btn-primary"
          >Kalkulator <img src={calcIcon} alt="Calculator icon" /></button
        ></a
      >
    </div>
    <ul>
      <li>
        <div class="flex flex-row justify-between items-center">
          <p>V. Semester</p>
          <button class="btn" on:click={() => collapseSemester('fifth')}
            >Zapri vse</button
          >
        </div>
        <br />
        <ul id="fifth">
          {#each semesterV as subject}
            <SubjectTile {subject} />
          {/each}
        </ul>
      </li>
      <br />
      <li>
        <div class="flex flex-row justify-between items-center">
          <p>VI. Semester</p>
          <button class="btn" on:click={() => collapseSemester('sixth')}
            >Zapri vse</button
          >
        </div>
        <br />
        <ul id="sixth">
          {#each semesterVI as subject}
            <SubjectTile {subject} />
          {/each}
        </ul>
      </li>
    </ul>
  </div>
</body>
