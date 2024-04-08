<script setup>
import {onMounted, ref} from "vue";

let area = ref(null),
    areaContent = ref("");

const PROPS = defineProps({
  onEnterKeyPressed: {
    type: Function,
    default: () => {},
  },

  maxlength: {
    type: Number,
    default: null,
  },
});

function onAreaInput(e) {
  if (PROPS.maxlength !== null
      && areaContent.value.length >= PROPS.maxlength) {

    e.preventDefault();
  } else {
    areaContent.value = area.value.innerHtml;
  }
}

onMounted(() => {

  area.value.addEventListener("keydown", PROPS.onEnterKeyPressed);
  area.value.addEventListener("input", onAreaInput);

});
</script>

<template>

  <div>
    <p>content:
      {{areaContent}}
    </p>


    <div id="area"
         ref="area"
         contenteditable="true">

      <slot />
    </div>
  </div>

</template>

<style lang="scss" scoped>
#area {
  background: transparent;

  outline: none;
  border: none;
  box-shadow: none;

  resize: none;
}
</style>