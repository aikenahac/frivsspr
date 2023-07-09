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
</script>

<svelte:head>
  <title>FRI VSŠ Predmetnik</title>
</svelte:head>

<body>
  <div class="base">
    <div class="container">
      <div class="content">
        <h1 class="title main-title">FRI VSŠ Predmetnik</h1>
        <p>
          Ker na FRI spletni strani ni podstrani, ki bi služila kot dober
          predmetnik, je tukaj seznam vseh predmetov na FRI VSŠ izobraževanju
        </p>

        <div>
          <h2 class="title year">1. letnik</h2>
          <ul>
            <li>
              <p class="pb-3">I. Semester</p>
              <ul>
                {#each semesterI as subject}
                  <li class="pb-2">
                    <Subject {subject} />
                  </li>
                {/each}
              </ul>
            </li>
            <br />
            <li>
              <p class="pb-3">II. Semester</p>
              <ul>
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
              <p class="pb-3">III. Semester</p>
              <ul>
                {#each semseterIII as subject}
                  <li class="pb-2">
                    <Subject {subject} />
                  </li>
                {/each}
              </ul>
            </li>
            <br />
            <li>
              <p class="pb-3">IV. Semester</p>
              <ul>
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
              <p class="pb-3">V. Semester</p>
              <ul>
                {#each semesterV as subject}
                  <li class="pb-2">
                    <Subject {subject} />
                  </li>
                {/each}
              </ul>
            </li>
            <br />
            <li>
              <p class="pb-3">VI. Semester</p>
              <ul>
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
          <a href="https://github.com/aikenahac/frivsspr/issues"
            >popravke in predloge</a
          >
        </p>
        <p>Pripravil <a href="https://aikenahac.com">Aiken T. Ahac</a></p>
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
    color: #e3e0dc;
    margin: 0;
    padding: 0;
  }

  .base {
    background-color: #191a1c;
    display: flex;
    justify-content: center;
    align-items: center;
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

  .year {
    font-size: 2rem;
  }

  a {
    color: #e12a26;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    .container {
      width: 90vw;
    }
  }
</style>
