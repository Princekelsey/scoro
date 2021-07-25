import { IActions, IMutation, IState, IStore } from "@/types";
import { reactive, InjectionKey, toRefs } from "vue";
import Server from "@/server/Server";

export const StoreKey: InjectionKey<IStore> = Symbol("Store");

const state = reactive<IState>({
  isLoading: false,
  projects: [],
  tasks: [],
  error: null,
  statusItems: [],
  selected: null,
  isOpen: false,
  isButtonClicked: false,
});

const mutations: IMutation = {
  setProjects(projects): void {
    state.projects = projects;
  },

  setTasks(tasks): void {
    state.tasks = tasks;
  },

  setLoading(value): void {
    state.isLoading = value;
  },

  setError(error): void {
    state.error = error;
  },

  setStatusItems(statusItems): void {
    state.statusItems = statusItems;
  },

  updateSelected(selectedItem): void {
    const items = [...state.statusItems];
    if (selectedItem) {
      const index = items.findIndex(
        (item) => item.originalName === selectedItem.originalName
      );
      if (index !== -1) {
        items[index].color = selectedItem.color;

        state.statusItems = items;
      }
    } else {
      state.isOpen = false;
    }
    state.selected = selectedItem;
  },

  toggleOpenState(selectedItem): void {
    if (selectedItem) {
      if (!state.isOpen && state.isButtonClicked) {
        mutations.updateSelected(null);
        state.isOpen = false;
      } else if (!state.isOpen && !state.isButtonClicked) {
        mutations.updateSelected(selectedItem);
        state.isButtonClicked = true;
        state.isOpen = true;
      } else if (state.isOpen && state.isButtonClicked) {
        if (state.selected && state.selected.id !== selectedItem.id) {
          mutations.updateSelected(selectedItem);
          state.isOpen = true;
        } else {
          mutations.updateSelected(null);
          state.isOpen = false;
          state.isButtonClicked = false;
        }
      } else {
        mutations.updateSelected(selectedItem);
        state.isOpen = true;
      }
    } else {
      state.isOpen = false;
      state.isButtonClicked = false;
      state.selected = null;
    }
  },

  updateItemStatus(id, updateValue, type): void {
    const { status, color } = updateValue;
    if (type === "project") {
      const items = [...state.projects];
      const index = items.findIndex((item) => item.project_id === id);
      if (index !== -1) {
        items[index].status = status;
        items[index].color = color;
        state.projects = items;
      }
    } else {
      const items = [...state.tasks];
      const index = items.findIndex((item) => item.event_id === id);
      if (index !== -1) {
        items[index].status = status;
        items[index].color = color;
        state.tasks = items;
      }
    }
    state.isOpen = false;
    state.isButtonClicked = false;
    state.selected = null;
  },
};

const actions: IActions = {
  async getProjectsList(): Promise<void> {
    mutations.setError(null);
    mutations.setLoading(true);
    try {
      const {
        data: { data, status, messages },
      } = await Server.getProjectsList();

      if (status === "OK") {
        mutations.setProjects(data);
      } else {
        mutations.setError(messages && messages.error[0]);
        mutations.setProjects([]);
      }
      mutations.setLoading(false);
    } catch (error) {
      mutations.setError("Error getting projects, Please try again");
      mutations.setLoading(false);
      mutations.setProjects([]);
    }
  },

  async getTasksList(): Promise<void> {
    mutations.setError(null);
    mutations.setLoading(true);
    try {
      const {
        data: { data, status, messages },
      } = await Server.getTasksList();
      if (status === "OK") {
        mutations.setTasks(data);
      } else {
        mutations.setError(messages && messages.error[0]);
        mutations.setTasks([]);
      }
      mutations.setLoading(false);
    } catch (error) {
      mutations.setError("Error getting tasks, Please try again");
      mutations.setLoading(false);
      mutations.setTasks([]);
    }
  },
};

const store: IStore = {
  ...toRefs(state),
  mutations,
  actions,
};

export default store;
