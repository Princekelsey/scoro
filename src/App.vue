<template>
  <div id="nav">
    <router-link to="/">Projects</router-link> |
    <router-link to="/task">Tasks</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import store, { StoreKey } from "@/store";

export default defineComponent({
  setup() {
    provide(StoreKey, store);
  },
});
</script>

<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: var(--color-primary);
}
</style>
