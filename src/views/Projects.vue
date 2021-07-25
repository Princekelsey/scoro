<template>
  <Title pageTilte="Projects List" />
  <Loading v-if="isLoading" />
  <ErrorMessage v-else-if="error" :errorMessage="error" />
  <ListContainer v-else>
    <ListItem
      v-for="project in projects"
      :key="project.project_id"
      :listItem="project"
    />
  </ListContainer>
</template>

<script lang="ts">
import { StoreKey } from "@/store";
import { defineComponent, onMounted } from "vue";
import { injectStrict } from "@/utils";
import Loading from "@/components/Loading.vue";
import Title from "@/components/Title.vue";
import ListContainer from "@/components/ListContainer.vue";
import ListItem from "@/components/ListItem.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import { projectStatus } from "@/assets/data";

export default defineComponent({
  name: "Projects",
  components: {
    Loading,
    Title,
    ListContainer,
    ListItem,
    ErrorMessage,
  },
  setup() {
    const {
      isLoading,
      projects,
      error,
      actions: { getProjectsList },
      mutations: { setStatusItems },
    } = injectStrict(StoreKey);

    onMounted(() => {
      getProjectsList();
      setStatusItems(projectStatus);
    });

    return {
      isLoading,
      projects,
      error,
    };
  },
});
</script>
