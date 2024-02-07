<script lang="ts">
  import { SubjectType, type CalculatorSubject } from '$lib/types';

  let zipScore = 0;

  export let subject: CalculatorSubject;
  export let selectSubject: (subject: CalculatorSubject) => void;

  function customKT() {
    const newSubj = subject;
    newSubj.points = zipScore;
    newSubj.isSelected = false;
    selectSubject(newSubj);
  }

  function getSubjectColor(type: SubjectType) {
    switch (type) {
      case SubjectType.Mandatory:
        return 'text-base-content';
      case SubjectType.Disciplinary:
        return 'text-warning';
      case SubjectType.Directionary:
        return 'text-info';
      case SubjectType.Common:
        return 'text-success';
    }

    return '';
  }
</script>

<div>
  <div
    class="flex justify-between items-center cursor-pointer pb-1"
    role="button"
    tabindex="0"
    on:keypress={subject.type !== SubjectType.Mandatory && !subject.notTaught
      ? () => {
          selectSubject(subject);
        }
      : null}
    on:click={subject.type !== SubjectType.Mandatory && !subject.notTaught
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
        disabled={subject.type === SubjectType.Mandatory || subject.notTaught}
      />
      <p class={`ml-2 ${getSubjectColor(subject.type)}`}>
        {subject.name}
        {subject.notTaught ? '(Se ne izvaja)' : ''}
      </p>
    </div>
    <p class="mr-2">
      {subject.type === SubjectType.Common ? zipScore : subject.points} KT
    </p>
  </div>
  {#if subject.type === SubjectType.Common && subject.isSelected}
    <div class="flex">
      <div class="form-control w-full max-w-xs">
        <label class="label" for="ktinput">
          <span class="label-text">Vnesi KT</span>
        </label>
        <div>
          <input
            type="number"
            placeholder="6"
            name="ktinput"
            class="input input-bordered input-primary w-32 max-w-xs"
            bind:value={zipScore}
          />
          <button class="btn btn-primary" on:click={() => customKT()}
            >Add</button
          >
        </div>
      </div>
    </div>
  {/if}
</div>
