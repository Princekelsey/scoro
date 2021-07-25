<template>
  <li
    class="status-item"
    :class="{ active: isActive }"
    @click.stop="handleSelection"
  >
    <span
      class="circle"
      :style="{ 'background-color': statusItem.color }"
    ></span>
    <span class="ml-8 display-name">{{ statusItem.displayName }}</span>
  </li>
</template>

<script lang="ts">
import { StoreKey } from "@/store";
import { IStatusItem, ItemType } from "@/types";
import { injectStrict } from "@/utils";
import { defineComponent, PropType, computed } from "vue";

export default defineComponent({
  name: "StatusItem",
  props: {
    statusItem: {
      type: Object as PropType<IStatusItem>,
      required: true,
    },
    itemId: {
      type: Number,
      required: true,
    },
    itemType: {
      type: String as PropType<ItemType>,
      required: true,
    },
  },
  setup(props) {
    const {
      selected,
      mutations: { updateItemStatus },
    } = injectStrict(StoreKey);

    const isActive = computed<boolean>(
      () => props.statusItem.originalName === selected.value?.originalName
    );

    const handleSelection = (): void => {
      updateItemStatus(
        props.itemId,
        {
          status: props.statusItem.originalName,
          color: props.statusItem.color,
        },
        props.itemType
      );
    };

    return {
      selected,
      isActive,
      handleSelection,
    };
  },
});
</script>

<style scoped>
.status-item {
  display: flex;
  align-items: center;
  color: var(--text-primary);
  text-align: start;
  width: 100%;
  padding: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
}

.status-item:hover {
  background-color: #f7f9fd;
}

.active {
  background-color: #ebf5fa;
  border-left: 2px solid #0085e0;
  padding-left: 8px;
}

.active .circle {
  border: 2px solid #fff;
  height: 14px;
  width: 14px;
}

.active .display-name {
  margin-left: 5px;
}

.circle {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
</style>
