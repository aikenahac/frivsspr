<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { enhance } from '$app/forms';

  function getSubjectLink(code: string | null): string {
    switch (code) {
      case null:
        return '/no-subject';
      case 'splosni-izbirni-predmeti':
      case 'delovna-praksa':
        return `https://www.fri.uni-lj.si/sl/${code}`;
      default:
        return `https://www.fri.uni-lj.si/sl/predmet/${code}`;
    }
  }

  export let data: PageData;
  const subject = data.subject;

  let rating =
    data.subject.ratings.reduce((a, c) => a + c, 0) / data.subject.voteCount;
  let hasVoted = true;
  let vote = 5;

  onMount(() => {
    const hv: boolean = JSON.parse(localStorage.getItem('hasVoted') || 'false');
    const vt: number = parseInt(localStorage.getItem('vote') || '0');

    hasVoted = hv;
    vote = vt;
  });

  async function submitVote() {
    localStorage.setItem('hasVoted', 'true');
    localStorage.setItem('vote', vote.toString());

    const resp = await fetch('/api/vote', {
      method: 'POST',
      body: JSON.stringify({ id: data.subject.id, vote: vote }),
      headers: {
        'content-type': 'application/json',
      },
    });

    rating = await resp.json();
  }
</script>

<svelte:head>
  <title>{subject.info.name}</title>
</svelte:head>

<body>
  <div class="flex flex-row justify-normal items-center">
    <h1 class="font-['Klavila'] font-bold py-5 text-5xl">
      {subject.info.name}
    </h1>
    {#if subject.info.notTaught}
      <div class="badge badge-error ml-4">Se ne izvaja</div>
    {/if}
  </div>
  <p>
    Predmet: <a
      class="text-info"
      href={getSubjectLink(subject.info.code)}
      target={subject.info.code ? '_blank' : ''}>Odpri predmet</a
    >
  </p>
  <p>Tip: {subject.info.type}</p>
  <p>Kreditne točke: {subject.info.points}</p>
  <p>Ocena: {rating}</p>
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
  <ul>
    {#if subject.prerequisites != null && subject.prerequisites.length > 0}
      Predpogoji:
      <br />
      <ul class="pl-6 list-disc">
        {#each subject.prerequisites as prerequisite}
          <li>{prerequisite.name} ({prerequisite.points} KT)</li>
        {/each}
      </ul>
    {/if}
    {#if subject.related != null && subject.related.length > 0}
      <br />
      Smiselne povezave:
      <ul class="pl-6 list-disc">
        {#each subject.related as related}
          <li>{related.name} ({related.points} KT)</li>
        {/each}
      </ul>
    {/if}
    <div class="divider" />
  </ul>
</body>
