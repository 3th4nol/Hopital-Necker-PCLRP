<script>
  import { onMount, onDestroy } from 'svelte';

  export let maxValue = 100;
  export let count = 0;
  export const initialValue = 0;
  export let animationDuration = 3000;
  /**
   * @type {number | null}
   */
  let animationStart;

  function startAnimation() {
    animationStart = performance.now();
    requestAnimationFrame(stepAnimation);
  }

  /**
   * @param {number} timestamp
   */
  function stepAnimation(timestamp) {
    // @ts-ignore
    const progress = (timestamp - animationStart) / animationDuration;
    count = Math.min(Math.floor(progress * maxValue), maxValue);

    if (progress < 1) {
      requestAnimationFrame(stepAnimation);
    }
  }

  onMount(startAnimation);
  onDestroy(() => {
    animationStart = null;
  });
</script>
<div class="mx-[1vw] text-center" > {count.toLocaleString()}</div>