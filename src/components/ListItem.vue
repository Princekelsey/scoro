<template>
  <div class="list-item">
    <div>
      <p class="item-name mt-4 mb-4" v-if="listItem.project_name">
        <strong class="title">Project name: </strong>
        <span>{{ listItem.project_name }}</span>
      </p>
      <p class="item-name mt-4 mb-4" v-if="listItem.event_name">
        <strong class="title">Event name: </strong>
        <span>{{ listItem.event_name }}</span>
      </p>
      <p class="item-name mt-4 mb-4">
        <strong class="title">Status: </strong>
        <span>{{ formattedStatus }}</span>
      </p>
    </div>
    <div class="mt-16 center-content">
      <Button :color="color" :onClick="handleSelection">
        {{ formattedStatus }}
        <StatusContainer
          :itemId="itemId"
          :itemType="itemType"
          :show="isCurrentSelection"
        />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { StoreKey } from "@/store";
import {
  IListItem,
  ISelectedStatus,
  ProjectStatus,
  TaskStatus,
  ItemType,
} from "@/types";
import {
  addCustomColorToTaskItem,
  getProjectStatusDisplay,
  injectStrict,
} from "@/utils";
import { defineComponent, PropType, computed, toRefs } from "vue";
import Button from "./Button.vue";
import StatusContainer from "./StatusContainer.vue";

export default defineComponent({
  name: "ListItem",
  components: { Button, StatusContainer },
  props: {
    listItem: {
      type: Object as PropType<IListItem>,
      required: true,
    },
  },
  setup(props) {
    const {
      isOpen,
      selected,
      mutations: { toggleOpenState },
    } = injectStrict(StoreKey);

    const { listItem } = toRefs(props);

    const itemType = computed<ItemType>(() =>
      listItem.value.event_id ? "task" : "project"
    );

    const formattedStatus = computed<string>(() =>
      getProjectStatusDisplay(listItem.value.status, itemType.value)
    );

    const itemId = computed<number>(() =>
      listItem.value.event_id
        ? listItem.value.event_id
        : listItem.value.project_id
    );

    const color = computed<string>(() =>
      listItem.value.color
        ? listItem.value.color
        : addCustomColorToTaskItem(listItem.value.status)
    );

    const selectedItem = computed<ISelectedStatus>(() => ({
      color: listItem.value.color ? listItem.value.color : color.value,
      originalName: listItem.value.status as ProjectStatus | TaskStatus,
      id: listItem.value.event_id
        ? listItem.value.event_id
        : listItem.value.project_id,
    }));

    const isCurrentSelection = computed<boolean>(() => {
      if (selected.value) {
        if (listItem.value.event_id) {
          return selected.value.id === listItem.value.event_id;
        } else {
          return selected.value.id === listItem.value.project_id;
        }
      } else {
        return false;
      }
    });

    const handleSelection = (): void => {
      toggleOpenState(selectedItem.value);
    };

    return {
      formattedStatus,
      isOpen,
      handleSelection,
      isCurrentSelection,
      itemId,
      itemType,
      color,
    };
  },
});
</script>

<style scoped>
.list-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18rem;
  margin-bottom: 1.5rem;
  margin-right: 0.75rem;
  height: auto;
  border-radius: 0.25rem;
  border-width: 1px;
  padding: 1rem;
  background-color: var(--white);
  overflow-wrap: break-word;
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.list-item:hover {
  border: 0.1rem solid var(--color-primary);
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.item-name {
  font-size: 12px;
}

.title {
  font-size: 14px;
}

/* media querry */
@media (max-width: 576px) {
  .list-item {
    width: 100%;
  }
}
</style>
