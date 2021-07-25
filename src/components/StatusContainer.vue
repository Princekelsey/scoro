<template>
  <div>
    <draggable
      class="status-container"
      :class="{ show: show, drag: move }"
      v-click-outside="onClickOutside"
      tag="transition-group"
      :component-data="{
        tag: 'ul',
        type: 'transition-group',
      }"
      v-model="statusItems"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
    >
      <template #item="{ element }">
        <StatusItem
          :itemId="itemId"
          :itemType="itemType"
          :statusItem="element"
        />
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { StoreKey } from "@/store";
import { injectStrict } from "@/utils";
import { ItemType } from "@/types";
import { defineComponent, ref, computed, PropType } from "vue";
import draggable from "vuedraggable";
import StatusItem from "./StatusItem.vue";

export default defineComponent({
  name: "StatusContainer",
  components: { draggable, StatusItem },
  props: {
    itemId: {
      type: Number,
      required: true,
    },
    itemType: {
      type: String as PropType<ItemType>,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const {
      statusItems,
      mutations: { toggleOpenState },
    } = injectStrict(StoreKey);

    const drag = ref(false);

    const onClickOutside = (): void => {
      toggleOpenState(null);
    };

    const dragOptions = computed(() => ({
      animation: 200,
      group: "description",
      disabled: false,
      ghostClass: "ghost",
    }));

    return {
      statusItems,
      drag,
      dragOptions,
      onClickOutside,
    };
  },
});
</script>

<style scoped>
.status-container {
  position: absolute;
  width: 160px;
  height: 411px;
  top: 28px;
  left: 0;
  background: var(--white);
  color: var(--text-primary);
  box-shadow: 0px 2px 6px rgba(31, 34, 38, 0.08),
    0px 8px 32px rgba(31, 34, 38, 0.12);
  border-radius: 4px;
  z-index: 10;
  display: none;
}
.show {
  display: block !important;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.move {
  cursor: move !important;
}
</style>
