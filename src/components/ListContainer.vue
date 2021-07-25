<template>
  <div class="container pt-16">
    <div class="list-container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListContainer",
});
</script>

<style scoped>
.list-container {
  display: flex;
  flex-wrap: wrap;
}

/* media querry */
@media (max-width: 576px) {
  .list-container {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
