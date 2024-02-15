<script lang="ts">
  import AdminComment from '$lib/components/AdminComment.svelte';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const comments = data.comments;
  let authorized = false;
  let pwd = '';

  async function login(password: string, msg: string) {
    const resp = await fetch('/api/admin', {
      method: 'POST',
      body: JSON.stringify({ password }),
      headers: {
        'content-type': 'application/json',
      },
    });

    const { status } = await resp.json();

    if (status === 401) {
      return alert(msg);
    } else if (status === 200) {
      authorized = true;
      localStorage.setItem('password', password);
      password = '';
      return;
    }

    alert('Unknown error');
  }

  onMount(() => {
    const pass = localStorage.getItem('password');

    if (pass) {
      login(pass, 'Authorize again');
    }
  });
</script>

<svelte:head>
  <title>FRIVSŠPr Admin</title>
</svelte:head>

<body>
  <h1 class="font-['Klavila'] font-bold py-5 text-5xl">
    Admin (Comment approval)
  </h1>
  {#if authorized}
    <div class="grid grid-cols-2 gap-2">
      {#each comments as comment}
        <AdminComment {comment} />
      {/each}
    </div>
  {:else}
    <div class="flex flex-row items-center">
      <input
        type="password"
        placeholder="Password"
        class="input input-bordered input-info w-full max-w-xs mr-2"
        bind:value={pwd}
      />
      <button class="btn btn-info" on:click={() => login(pwd, 'Wrong password')}
        >Login</button
      >
    </div>
  {/if}
</body>
