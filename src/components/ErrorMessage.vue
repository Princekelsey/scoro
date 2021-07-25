<template>
  <div class="error mt-32">
    <h2>{{ errorMessage }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorMessage",
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
}

.error h2 {
  color: #e53009;
}
</style>
