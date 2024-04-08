<script setup>
defineProps({
  margins: {
    type: Object,
    default: {x: 0, y: 0},
  },
});
</script>

<template>
  <div id="sheet" class="writer-mode" :style="`padding: ${margins.y ?? 0}px ${margins.x ?? 0}px;`">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:math";

$A4-sheet-ratio: math.div(21, 29.7);  // A4 format

#sheet {
  border: solid 1px #E6E6E6;

  aspect-ratio: $A4-sheet-ratio;
  width: 50%;

  margin: 50px auto 0;

  box-shadow: 4px 4px 5px rgba(230 230 230 / .75);
}
</style>

<style lang="scss">
/* Document styles */
.writer-mode {

  /* Heading */
  .heading,
  .heading * {
    font-weight: 800;

    /* Heading 1 */
    &.heading-1,
    &.heading-1 * {
      font-size: 3rem;
    }
  }

}
</style>