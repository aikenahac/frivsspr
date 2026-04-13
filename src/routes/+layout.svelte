<script lang="ts">
  import '../app.postcss';
  import calcIcon from '$lib/assets/calc.svg';
</script>

<main>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">FRIVSŠPr</a>
    </div>
    <div class="flex-none">
      <ul class="flex flex-row items-center gap-6 p-4">
        <li><a href="/">Seznam</a></li>
        <li>
          <a
            href="https://cdn.aiken.si/2025_brosura_FRI_vss.pdf"
            target="_blank">Vizualno</a
          >
        </li>
        <li>
          <a href="/calc/program" class="btn btn-primary" aria-label="Kalkulator">
            <span class="sm:hidden">
              <img src={calcIcon} alt="" class="h-5 w-5" />
            </span>
            <span class="hidden sm:inline">Kalkulator</span>
          </a>
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
        Pripravil <a class="text-info" href="https://aiken.si" target="_blank"
          >Aiken T. Ahac</a
        >
      </p>
      <br />
      <a href="/privacy-policy" class="text-[#D423C6]"> Privacy Policy </a>
    </div>
  </div>
</main>
