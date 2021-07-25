<template>
  <Title pageTilte="Tasks List" />
  <Loading v-if="isLoading" />
  <ErrorMessage v-else-if="error" :errorMessage="error" />
  <ListContainer v-else>
    <ListItem v-for="task in tasks" :key="task.event_id" :listItem="task" />
  </ListContainer>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Title from "@/components/Title.vue";
import { StoreKey } from "@/store";
import { injectStrict } from "@/utils";
import Loading from "@/components/Loading.vue";
import ListContainer from "@/components/ListContainer.vue";
import ListItem from "@/components/ListItem.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import { tasksStatus } from "@/assets/data";

export default defineComponent({
  name: "Tasks",
  components: { Title, Loading, ListContainer, ListItem, ErrorMessage },
  setup() {
    const {
      isLoading,
      tasks,
      error,
      actions: { getTasksList },
      mutations: { setStatusItems },
    } = injectStrict(StoreKey);

    onMounted(() => {
      getTasksList();
      setStatusItems(tasksStatus);
    });

    return {
      isLoading,
      tasks,
      error,
    };
  },
});
</script>
