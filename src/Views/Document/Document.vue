<script setup>
import DocumentTextArea from "../Components/Form/DocumentTextArea.vue";
import Sheet from "../Components/Document/Sheet.vue";
import {onMounted, ref} from "vue";

const documentTitle = ref(null);

function onDocumentTitleType(e) {
  if (e.keyCode === 13) {
    e.preventDefault();

    alert("ENTER KEY PRESSED!");
  }
}
</script>

<template>

  <div id="document">
    <section id="title">
      <Sheet :margins="{x: 75, y: 50}">
        <section id="document_title" class="heading heading-1">
          <DocumentTextArea
              ref="documentTitle"
              :on-enter-key-pressed="onDocumentTitleType"
              name="document_title"
              maxlength="2"
              required />

        </section>
      </Sheet>
    </section>
  </div>

</template>

<style lang="scss" scoped>

</style>