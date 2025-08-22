<script lang="ts">
  import '../app.postcss';
</script>

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
            href="https://cdn.aiken.si/2025_brosura_FRI_vss.pdf"
            target="_blank">Vizualni pregled</a
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="flex justify-center items-center">
    <div class="max-[600px]:w-[90vw] w-[60vw] min-h-screen">
      <slot />
      <br />
      <hr />
      <br />
      <p>
        Oddaj
        <a
          class="text-info"
          href="https://github.com/aikenahac/frivsspr/issues"
          target="_blank">popravke in predloge</a
        >
      </p>
      <p>
        Pripravil <a
          class="text-info"
          href="https://aiken.si"
          target="_blank">Aiken T. Ahac</a
        >
      </p>
      <br />
      <a href="/privacy-policy" class="text-[#D423C6]">
        Privacy Policy
      </a>
    </div>
  </div>
</main>
