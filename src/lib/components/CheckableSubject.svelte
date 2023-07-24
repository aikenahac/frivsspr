<script lang="ts">
  import { SubjectType, type CalculatorSubject } from '$lib/types';

  export let subject: CalculatorSubject;
  export let selectSubject: (subject: CalculatorSubject) => void;
</script>

<div
  class="flex justify-between items-center cursor-pointer pb-1"
  role="button"
  tabindex="0"
  on:keypress={subject.type !== SubjectType.Mandatory
    ? () => {
        selectSubject(subject);
      }
    : null}
  on:click={subject.type !== SubjectType.Mandatory
    ? () => {
        selectSubject(subject);
      }
    : null}
>
  <div class="flex items-center">
    <input
      type="checkbox"
      class="checkbox"
      bind:checked={subject.isSelected}
      disabled={subject.type === SubjectType.Mandatory ? true : false}
    />
    <p class="ml-2">{subject.name}</p>
  </div>
  <p class="mr-2">{subject.points} KT</p>
</div>
