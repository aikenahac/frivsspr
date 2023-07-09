<script lang="ts">
  import type { Subject } from "../types";

  export let subject: Subject;
</script>

<main>
  <div
    id={subject.info.code.toString()}
    class="collapse collapse-arrow bg-base-200"
  >
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium text-[#e12a26]">
      {subject.info.name}
    </div>
    <div class="collapse-content">
      {#if subject.prerequisite != null}
        Predpogoj: {subject.prerequisite.name}
      {/if}
    </div>
  </div>
</main>
