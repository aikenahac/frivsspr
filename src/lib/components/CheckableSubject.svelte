<script lang="ts">
  import { SubjectTypeDB, type CalculatorSubject } from '$lib/types';

  let zipScore = 0;
  let buttonDisabled = false;

  export let subject: CalculatorSubject;
  export let selectSubject: (subject: CalculatorSubject) => void;

  function customKT() {
    subject.points = zipScore;
    subject.isSelected = false;
    selectSubject(subject);
    buttonDisabled = true;
  }

  function resetCustomKT() {
    subject.points = -zipScore;
    subject.isSelected = false;
    selectSubject(subject);
    zipScore = 0;
    buttonDisabled = false;
  }

  function getSubjectColor(type: SubjectTypeDB) {
    switch (type) {
      case SubjectTypeDB.Mandatory:
        return 'text-base-content';
      case SubjectTypeDB.Disciplinary:
        return 'text-warning';
      case SubjectTypeDB.Directionary:
        return 'text-info';
      case SubjectTypeDB.Common:
        return 'text-success';
    }
  }
</script>

<div>
  <div
    class="flex justify-between items-center cursor-pointer pb-1"
    role="button"
    tabindex="0"
    on:keypress={subject.type !== SubjectTypeDB.Mandatory && !subject.notTaught
      ? () => {
          selectSubject(subject);
        }
      : null}
    on:click={subject.type !== SubjectTypeDB.Mandatory && !subject.notTaught
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
        disabled={subject.type === SubjectTypeDB.Mandatory || subject.notTaught}
      />
      <p class={`ml-2 ${getSubjectColor(subject.type)}`}>
        {subject.name}
        {subject.notTaught ? '(Se ne izvaja)' : ''}
      </p>
    </div>
    <p class="mr-2">
      {subject.type === SubjectTypeDB.Common ? zipScore : subject.points} KT
    </p>
  </div>
  {#if subject.type === SubjectTypeDB.Common && subject.isSelected}
    <div class="flex flex-row items-center">
      <div class="form-control w-full max-w-xs">
        <label class="label" for="ktinput">
          <span class="label-text">Vnesi KT</span>
        </label>
        <div>
          <input
            type="number"
            placeholder="6"
            min={1}
            max={24}
            class="input input-bordered input-primary w-32 max-w-xs"
            bind:value={zipScore}
          />
          <button
            disabled={buttonDisabled}
            class="btn btn-primary"
            on:click={() => customKT()}>Dodaj</button
          >
          {#if buttonDisabled}
            <button class="btn btn-square" on:click={() => resetCustomKT()}
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                /></svg
              ></button
            >
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
