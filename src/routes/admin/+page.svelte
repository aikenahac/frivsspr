<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const comments = data.comments;
  let authorized = false;
  let password = '';

  async function login() {
    const resp = await fetch('/api/admin', {
      method: 'POST',
      body: JSON.stringify({ password }),
      headers: {
        'content-type': 'application/json',
      },
    });

    const { status } = await resp.json();

    if (status === 401) {
      return alert('Wrong password');
    } else if (status === 200) {
      password = '';
      authorized = true;
      return;
    }

    alert('Unknown error');
  }
</script>

<svelte:head>
  <title>FRIVSŠPr Admin</title>
</svelte:head>

<body>
  <h1 class="font-['Klavila'] font-bold py-5 text-5xl">
    Admin (Comment approval)
  </h1>
  {#if authorized}
    {#each comments as comment}
      <p>
        {comment.subject?.info.name}: {comment.content} (Approved: {comment.approved})
      </p>
    {/each}
  {:else}
    <div class="flex flex-row items-center">
      <input
        type="password"
        placeholder="Password"
        class="input input-bordered input-info w-full max-w-xs mr-2"
        bind:value={password}
      />
      <button class="btn btn-info" on:click={() => login()}>Button</button>
    </div>
  {/if}
</body>
