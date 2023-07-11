<script lang="ts">
  import Subject from '$lib/components/Subject.svelte';
  import {
    semesterI,
    semesterII,
    semesterIV,
    semesterV,
    semesterVI,
    semseterIII,
  } from '$lib/content';
  import { SubjectType } from '$lib/types';

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
</script>

<svelte:head>
  <title>FRI VSŠ Predmetnik</title>
</svelte:head>

<body>
  <div class="flex justify-center items-center">
    <div class="container">
      <div class="content">
        <h1 class="title main-title">FRI VSŠ Predmetnik</h1>
        <p>
          Ker na FRI spletni strani ni podstrani, ki bi služila kot dober
          predmetnik, je tukaj seznam vseh predmetov na FRI VSŠ izobraževanju
        </p>

        <h2 class="title legend">Legenda:</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-column items-center">
            <div class="avatar">
              <div class="bg-base-content rounded-full w-12" />
            </div>
            <div class="divider lg:divider-horizontal" />
            <p>{SubjectType.Common}</p>
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

        <div>
          <h2 class="title year">1. letnik</h2>
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
                  <li class="pb-2">
                    <Subject {subject} />
                  </li>
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
                  <li class="pb-2">
                    <Subject {subject} />
                  </li>
                {/each}
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="title year">2. letnik</h2>
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
                {#each semseterIII as subject}
                  <li class="pb-2">
                    <Subject {subject} />
                  </li>
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
                  <li class="pb-2">
                    <Subject {subject} />
                  </li>
                {/each}
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="title year">3. letnik</h2>
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
                  <li class="pb-2">
                    <Subject {subject} />
                  </li>
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
                  <li class="pb-2">
                    <Subject {subject} />
                  </li>
                {/each}
              </ul>
            </li>
          </ul>
        </div>
        <br />
        <hr />
        <br />
        <p>
          Oddaj
          <a
            class="text-[#e12a26]"
            href="https://github.com/aikenahac/frivsspr/issues"
            >popravke in predloge</a
          >
        </p>
        <p>
          Minimalna verzija je na voljo <a class="text-[#e12a26]" href="/min"
            >tukaj</a
          >
        </p>
        <p>
          Pripravil <a class="text-[#e12a26]" href="https://aikenahac.com"
            >Aiken T. Ahac</a
          >
        </p>
        <br />
      </div>
    </div>
  </div>
</body>

<style>
  @font-face {
    font-family: 'Klavila';
    src: url('../lib/fonts/klavika.otf') format('opentype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Klavila';
    src: url('../lib/fonts/klavika-bold.otf') format('opentype');
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

  .year,
  .legend {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    .container {
      width: 90vw;
    }
  }
</style>
