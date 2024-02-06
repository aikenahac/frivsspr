<script lang="ts">
  import type { Subject, SubjectType } from '../types';
  import { SubjectType as SubjectTypeVar } from '../types';

  function higlightSubject(id: string | null) {
    if (!id) return;

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
      <div class="flex flex-row items-center justify-items-center">
        {subject.info.name}
        {#if subject.info.notTaught}
          <div class="badge badge-error ml-4">Se ne izvaja</div>
        {/if}
      </div>
    </div>
    <div class="collapse-content">
      Predmet: <a class="text-info" href={`/subject/${subject.id}`}
        >Odpri predmet</a
      >
      <br />
      {#if subject.info.type === SubjectTypeVar.Common}
        Dodatno: <a
          class="text-info"
          href="https://www.uni-lj.si/studij/zip/"
          target="_blank">Seznam ZIP</a
        >
        <br />
      {/if}
      Tip: {subject.info.type}
      <br />
      Kreditne točke: {subject.info.type === SubjectTypeVar.Common
        ? 'Razno'
        : subject.info.points}
      {#if subject.prerequisites != null && subject.prerequisites.length > 0}
        <br />
        <br />
        Predpogoji:
        <br />
        <ul class="pl-6 list-disc">
          {#each subject.prerequisites as prerequisite}
            <li>
              <button
                class="text-info text-left"
                on:click={() => higlightSubject(prerequisite.code)}
                >{prerequisite.name} ({prerequisite.points} KT)</button
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
                class="text-info text-left"
                on:click={() => higlightSubject(related.code)}
                >{related.name} ({related.points} KT)</button
              >
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</main>
