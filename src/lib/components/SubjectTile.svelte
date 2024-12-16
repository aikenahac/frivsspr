<script lang="ts">
  import type { Subject } from '$lib/types';
  import { SubjectType } from '$lib/types';
  import { onMount } from 'svelte';

  let rating: string | undefined = undefined;
  let hasVoted = true;
  let vote = 0;
  let voteCount: number;

  onMount(() => {
    const hv: boolean = JSON.parse(
      localStorage.getItem(`hasVoted-${subject.id}`) || 'false',
    );
    const vt: number = parseInt(
      localStorage.getItem(`vote-${subject.id}`) || '0',
    );

    hasVoted = hv;
    vote = vt;
    rating = (
      subject.ratings && subject.voteCount
        ? subject.ratings.reduce((a, c) => a + c, 0) /
          subject.voteCount
        : 0
    ).toFixed(2);
    voteCount = subject.ratings?.length ?? 0;
  });

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
      class="collapse-title text-xl font-medium {getSubjectColor(subject.type)} flex flex-row items-center justify-between"
    >
      <div class="flex flex-row items-center justify-items-center">
        {subject.name}
        {#if rating && voteCount > 0}
          <span class="text-sm ml-3">[{rating}/5 ({voteCount})]</span>
        {/if}
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
      {#if rating}
        <div class="mt-2">
        <p>Ocena: {rating} ({voteCount})</p>
        <div class="rating rating-lg">
          <input
            disabled={hasVoted}
            type="radio"
            name="rating-1"
            class="mask mask-star"
            checked={vote === 1}
            on:click={() => (vote = 1)}
          />
          <input
            disabled={hasVoted}
            type="radio"
            name="rating-1"
            class="mask mask-star"
            checked={vote === 2}
            on:click={() => (vote = 2)}
          />
          <input
            disabled={hasVoted}
            type="radio"
            name="rating-1"
            class="mask mask-star"
            checked={vote === 3}
            on:click={() => (vote = 3)}
          />
          <input
            disabled={hasVoted}
            type="radio"
            name="rating-1"
            class="mask mask-star"
            checked={vote === 4}
            on:click={() => (vote = 4)}
          />
          <input
            disabled={hasVoted}
            type="radio"
            name="rating-1"
            class="mask mask-star"
            checked={vote === 5}
            on:click={() => (vote = 5)}
          />
          <button disabled={hasVoted} class="btn ml-2" on:click={() => submitVote()}
            >Glasuj</button
          >
          <div class="divider" />
        </div>
        </div>
      {/if}
    </div>
  </div>
</main>
