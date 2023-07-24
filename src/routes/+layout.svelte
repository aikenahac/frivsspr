<script lang="ts">
  import '../app.postcss';
</script>

<svelte:head>
  <title>FRI VSŠ Predmetnik</title>
</svelte:head>

<main>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">FRIVSŠPr</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/">Seznam</a></li>
        <li>
          <a
            href="https://www.fri.uni-lj.si/upload/Slike/predmetniki/2021_predmetnik_vss_ri.pdf"
            target="_blank">Vizualni pregled</a
          >
        </li>
      </ul>
    </div>
  </div>
  <slot />
</main>
