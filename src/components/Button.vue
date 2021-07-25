<template>
  <button
    class="button"
    :style="{ 'background-color': color }"
    @click.stop="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    color: {
      type: String,
    },
    onClick: {
      type: Function as PropType<() => void>,
    },
  },
});
</script>

<style scoped>
.button {
  display: inline-flex;
  position: relative;
  vertical-align: top;
  background-color: var(--text-primary);
  border: none;
  border-radius: 4px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  box-shadow: none;
}
</style>
