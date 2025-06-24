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
  <h1 class="font-['Klavila'] font-bold py-5 text-5xl flex justify-between">
    Admin (Comment approval)

    {#if authorized}
      <button class="btn btn-primary flex gap-2" on:click={() => fetch('/api/admin/sync')}>
        <svg
          width="12px"
          height="12px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g fill="#fff">
            <path
              d="M8 1.5A6.5 6.5 0 001.5 8 .75.75 0 010 8a8 8 0 0113.5-5.81v-.94a.75.75 0 011.5 0v3a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h1.44A6.479 6.479 0 008 1.5zM15.25 7.25A.75.75 0 0116 8a8 8 0 01-13.5 5.81v.94a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H3.31A6.5 6.5 0 0014.5 8a.75.75 0 01.75-.75z"
            />
          </g>
        </svg>
        Sync Subjects
      </button>
    {/if}
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
