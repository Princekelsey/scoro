import { ProjectStatus, TaskStatus, ItemType } from "@/types";
import { inject, InjectionKey } from "vue";

/**
 * Custom inject function to add store state to a component
 * @param InjectionKey injectionKey
 * @param fallback optional fallback state
 * @returns Returns store
 */
export const injectStrict = <T>(key: InjectionKey<T>, fallback?: T): T => {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }

  return resolved;
};

/**
 * Formats item status to a user friendly value
 * @param status item status
 * @param type item type project | task
 * @returns Returns a user friendly formated status
 */
export const getProjectStatusDisplay = (
  status: string,
  type: ItemType
): string => {
  if (type === "project") {
    switch (status as ProjectStatus) {
      case "cancelled":
        return "Cancelled";
      case "completed":
        return "Completed";
      case "draft":
        return "Draft";
      case "future":
        return "Planned";
      case "inprogress":
        return "In progress";
      case "needsattention":
        return "Needs attention";
      case "needsestimates":
        return "Needs estimates";
      case "needsinput":
        return "Needs input";
      case "needsprep":
        return "Needs prep";
      case "needsreview":
        return "Needs review";
      case "needstesting":
        return "Needs testing";
      case "pending":
        return "Pending";
      case "testing":
        return "Testing";
      case "waiting":
        return "Waiting";
      default:
        return status;
    }
  } else {
    switch (status as TaskStatus) {
      case "task_status1":
        return "Status 1";
      case "task_status2":
        return "Status 2";
      case "task_status3":
        return "Status 3";
      case "task_status4":
        return "Status 4";
      case "task_status5":
        return "Status 5";
      case "task_status6":
        return "Status 6";
      case "task_status7":
        return "Status 7";
      case "task_status8":
        return "Status 8";
      case "task_status9":
        return "Status 9";
      case "task_status10":
        return "Status 10";
      case "task_status11":
        return "Status 11";
      default:
        return status;
    }
  }
};

/**
 * Adds custom color to task item
 * @param status item status
 * @returns Returns a custom color
 */
export const addCustomColorToTaskItem = (status: string): string => {
  switch (status as TaskStatus) {
    case "task_status1":
      return "#C05717";
    case "task_status2":
      return "#FFC58B";
    case "task_status3":
      return "#E2E6EE";
    case "task_status4":
      return "#B3BCF5";
    case "task_status5":
      return "#47C1BF";
    case "task_status6":
      return "#50B83C";
    case "task_status7":
      return "#FAD200";
    case "task_status8":
      return "#FFEA8A";
    case "task_status9":
      return "#5C6AC4";
    case "task_status10":
      return "#145B39";
    case "task_status11":
      return "red";
    default:
      return "#343f53";
  }
};
