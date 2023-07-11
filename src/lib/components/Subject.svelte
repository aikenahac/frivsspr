<script lang="ts">
  import type { Subject, SubjectType } from '../types';
  import { SubjectType as SubjectTypeVar } from '../types';

  function higlightSubject(id: string) {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.classList.remove('highlight');
      el.classList.add('highlight');

      const checkboxes = el.querySelectorAll('input[type="checkbox"]');

      checkboxes.forEach((c) => {
        const cc = c as HTMLInputElement;

        cc.checked = true;
      });
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

  function getSubjectColor(type: SubjectType | undefined): string {
    switch (type) {
      case SubjectTypeVar.Disciplinary:
        return 'text-warning';
      case SubjectTypeVar.Directionary:
        return 'text-info';
      case SubjectTypeVar.Common:
        return 'text-success';
      case SubjectTypeVar.Mandatory:
      default:
        return 'text-base-content';
    }
  }

  export let subject: Subject;
</script>

<main class="pb-2">
  <div id={subject.info.code} class="collapse collapse-arrow bg-base-200">
    <input type="checkbox" />
    <div
      class="collapse-title text-xl font-medium {getSubjectColor(
        subject.info.type,
      )}"
    >
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
        <ul class="pl-6 list-disc">
          {#each subject.prerequisites as prerequisite}
            <li>
              <button
                class="text-[#e12a26] text-left"
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
        <ul class="pl-6 list-disc">
          {#each subject.related as related}
            <li>
              <button
                class="text-[#e12a26] text-left"
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
