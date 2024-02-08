<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { readableDate } from '$lib/utils';

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

  let rating: number = NaN;
  let hasVoted = true;
  let vote = 0;
  let voteCount: number;
  let comment = '';

  onMount(() => {
    const hv: boolean = JSON.parse(
      localStorage.getItem(`hasVoted-${subject.id}`) || 'false',
    );
    const vt: number = parseInt(
      localStorage.getItem(`vote-${subject.id}`) || '0',
    );

    hasVoted = hv;
    vote = vt;
    const calc =
      data.subject.ratings && data.subject.voteCount
        ? data.subject.ratings.reduce((a, c) => a + c, 0) /
          data.subject.voteCount
        : 0;
    rating = !Number.isNaN(calc) ? calc : 0;
    voteCount = subject.ratings?.length ?? 0;
  });

  async function submitVote() {
    localStorage.setItem(`hasVoted-${subject.id}`, 'true');
    localStorage.setItem(`vote-${subject.id}`, vote.toString());

    const resp = await fetch('/api/vote', {
      method: 'POST',
      body: JSON.stringify({ id: data.subject.id, vote: vote }),
      headers: {
        'content-type': 'application/json',
      },
    });

    const { newRating, count } = await resp.json();
    rating = newRating;
    voteCount = count;
    hasVoted = true;
  }

  async function submitComment() {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ id: subject.id, content: comment }),
      headers: {
        'content-type': 'application/json',
      },
    });

    comment = '';

    return;
  }
</script>

<svelte:head>
  <title>{subject.name}</title>
</svelte:head>

<body>
  <div class="flex flex-row justify-normal items-center">
    <h1 class="font-['Klavila'] font-bold py-5 text-5xl">
      {subject.name}
    </h1>
    {#if subject.notTaught}
      <div class="badge badge-error ml-4">Se ne izvaja</div>
    {/if}
  </div>
  <p>
    Predmet: <a
      class="text-info"
      href={getSubjectLink(subject.code)}
      target={subject.code ? '_blank' : ''}>Odpri predmet</a
    >
  </p>
  <p>Tip: {subject.type}</p>
  {#if subject.points}
    <p>Kreditne točke: {subject.points}</p>
  {/if}
  {#if !Number.isNaN(rating)}
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
  {/if}
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
  <div class="flex flex-col">
    <textarea
      placeholder="Komentar (ko oddaš ga mora admin sprejeti)"
      class="textarea textarea-info textarea-lg w-full"
      bind:value={comment}
    />
    <br />
    <button class="btn" on:click={() => submitComment()}>Oddaj</button>
    <div class="divider" />
    <h2 class="font-['Klavila'] font-bold py-5 text-3xl">Komentarji</h2>
    <div class="flex flex-col items-center justify-start">
      {#each subject.comments ?? [] as comment}
        {#if comment.approved}
          <div class="card w-full bg-base-100 shadow-xl mb-2">
            <div class="card-body break-words">
              <p class="font-bold">{readableDate(comment.createdAt)}</p>
              <p>{comment.content}</p>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</body>
