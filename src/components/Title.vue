<template>
  <h1 className="title">
    {{ pageTilte }}
  </h1>
  <div className="underline mt-8"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Title",
  props: {
    pageTilte: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.title {
  text-align: center;
  line-height: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.underline {
  width: 10rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--color-primary);
  margin-left: auto;
  margin-right: auto;
}
</style>
