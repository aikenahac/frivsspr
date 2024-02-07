<script lang="ts">
  import type { Comment } from '$lib/types';
  import { readableDate } from '$lib/utils';

  export let comment: Comment;

  async function approveComment(id: number) {
    const password = localStorage.getItem('password');
    const resp = await fetch('/api/admin/approve', {
      method: 'PUT',
      body: JSON.stringify({ id, password }),
      headers: {
        'content-type': 'application/json',
      },
    });

    const { status } = await resp.json();

    if (status === 401) {
      return alert('Unauthorized, how tf did you get here');
    } else if (status === 200) {
      window.location.reload();
    }
  }

  async function deleteComment(id: number) {
    const password = localStorage.getItem('password');
    const resp = await fetch('/api/admin/delete', {
      method: 'DELETE',
      body: JSON.stringify({ id, password }),
      headers: {
        'content-type': 'application/json',
      },
    });

    const { status } = await resp.json();

    if (status === 401) {
      return alert('Unauthorized, how tf did you get here');
    } else if (status === 200) {
      window.location.reload();
    }
  }
</script>

<div class="card w-96 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Predmet: {comment?.subject?.info.name}</h2>
    <p>{comment.content}</p>
    <p>{readableDate(comment.createdAt)}</p>
    <div class="card-actions justify-end">
      <button
        class="btn btn-primary"
        on:click={() => approveComment(comment.id)}>Potrdi</button
      >
      <button class="btn btn-ghost" on:click={() => deleteComment(comment.id)}
        >Izbriši</button
      >
    </div>
  </div>
</div>
