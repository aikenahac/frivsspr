<script lang="ts">
  import type { Subject } from '../types';

  function higlightSubject(id: string) {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.classList.remove('highlight');
      el.classList.add('highlight');
    }
  }

  function getSubjectLink(code: string): string {
    switch (code) {
      case 'splosni-izbirni-predmeti':
      case 'delovna-praksa':
        return `https://www.fri.uni-lj.si/sl/${code}`;
      default:
        return `https://www.fri.uni-lj.si/sl/predmet/${code}`;
    }
  }

  export let subject: Subject;
</script>

<main class="pb-2">
  <div id={subject.info.code} class="collapse collapse-arrow bg-base-200">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium text-[#e12a26]">
      {subject.info.name}
    </div>
    <div class="collapse-content">
      Predmet: <a
        class="text-[#e12a26]"
        href={getSubjectLink(subject.info.code)}
        target="_blank">Odpri predmet</a
      >
      <br />
      Tip: {subject.info.type}
      {#if subject.prerequisites != null && subject.prerequisites.length > 0}
        <br />
        <br />
        Predpogoji:
        <br />
        <ul class="pl-8 list-disc">
          {#each subject.prerequisites as prerequisite}
            <li>
              <button
                class="text-[#e12a26]"
                on:click={() => higlightSubject(prerequisite.code)}
                >{prerequisite.name}</button
              >
            </li>
          {/each}
        </ul>
      {/if}
      {#if subject.related != null && subject.related.length > 0}
        <br />
        Smiselne povezave:
        <ul class="pl-8 list-disc">
          {#each subject.related as related}
            <li>
              <button
                class="text-[#e12a26]"
                on:click={() => higlightSubject(related.code)}
                >{related.name}</button
              >
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</main>
