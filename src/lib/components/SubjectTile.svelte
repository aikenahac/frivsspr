<script lang="ts">
  import type { Subject } from '$lib/types';
  import { SubjectType } from '$lib/types';

  function higlightSubject(id: number | null) {
    if (!id) return;

    const el = document.getElementById(id.toString());

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
      case SubjectType.Disciplinary:
        return 'text-warning';
      case SubjectType.Directionary:
        return 'text-info';
      case SubjectType.Common:
        return 'text-success';
      case SubjectType.Mandatory:
      default:
        return 'text-base-content';
    }
  }

  export let subject: Subject;
</script>

<main class="pb-2">
  <div id={subject.id.toString()} class="collapse collapse-arrow bg-base-200">
    <input type="checkbox" />
    <div
      class="collapse-title text-xl font-medium {getSubjectColor(subject.type)}"
    >
      <div class="flex flex-row items-center justify-items-center">
        {subject.name}
        {#if subject.notTaught}
          <div class="badge badge-error ml-4">Se ne izvaja</div>
        {/if}
      </div>
    </div>
    <div class="collapse-content">
      Predmet: <a class="text-info" href={`/subject/${subject.id}`}
        >Odpri predmet</a
      >
      <br />
      {#if subject.type === SubjectType.Common}
        Dodatno: <a
          class="text-info"
          href="https://www.uni-lj.si/studij/zip/"
          target="_blank">Seznam ZIP</a
        >
        <br />
      {/if}
      Tip: {subject.type}
      <br />
      Kreditne točke: {subject.type === SubjectType.Common
        ? 'Razno'
        : subject.points}
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
                on:click={() => higlightSubject(prerequisite.id)}
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
                on:click={() => higlightSubject(related.id)}
                >{related.name} ({related.points} KT)</button
              >
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</main>
