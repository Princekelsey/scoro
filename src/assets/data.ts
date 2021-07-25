import { IStatusItem } from "@/types";
import { getProjectStatusDisplay } from "@/utils";

export const projectStatus: IStatusItem[] = [
  {
    originalName: "draft",
    displayName: getProjectStatusDisplay("draft", "project"),
    color: "#C05717",
    id: 1,
  },
  {
    originalName: "needsprep",
    displayName: getProjectStatusDisplay("needsprep", "project"),
    color: "#FFC58B",
    id: 2,
  },
  {
    originalName: "future",
    displayName: getProjectStatusDisplay("future", "project"),
    color: "#E2E6EE",
    id: 3,
  },
  {
    originalName: "waiting",
    displayName: getProjectStatusDisplay("waiting", "project"),
    color: "#B3BCF5",
    id: 4,
  },
  {
    originalName: "needsestimates",
    displayName: getProjectStatusDisplay("needsestimates", "project"),
    color: "#47C1BF",
    id: 5,
  },
  {
    originalName: "inprogress",
    displayName: getProjectStatusDisplay("inprogress", "project"),
    color: "#50B83C",
    id: 6,
  },
  {
    originalName: "needsinput",
    displayName: getProjectStatusDisplay("needsinput", "project"),
    color: "#FAD200",
    id: 7,
  },
  {
    originalName: "testing",
    displayName: getProjectStatusDisplay("testing", "project"),
    color: "#FFEA8A",
    id: 8,
  },
  {
    originalName: "cancelled",
    displayName: getProjectStatusDisplay("cancelled", "project"),
    color: "#5C6AC4",
    id: 9,
  },

  {
    originalName: "completed",
    displayName: getProjectStatusDisplay("completed", "project"),
    color: "#145B39",
    id: 10,
  },
  {
    originalName: "pending",
    displayName: getProjectStatusDisplay("pending", "project"),
    color: "red",
    id: 11,
  },
];

export const tasksStatus: IStatusItem[] = [
  {
    originalName: "task_status1",
    displayName: getProjectStatusDisplay("task_status1", "task"),
    color: "#C05717",
    id: 1,
  },
  {
    originalName: "task_status2",
    displayName: getProjectStatusDisplay("task_status2", "task"),
    color: "#FFC58B",
    id: 2,
  },
  {
    originalName: "task_status3",
    displayName: getProjectStatusDisplay("task_status3", "task"),
    color: "#E2E6EE",
    id: 3,
  },
  {
    originalName: "task_status4",
    displayName: getProjectStatusDisplay("task_status4", "task"),
    color: "#B3BCF5",
    id: 4,
  },
  {
    originalName: "task_status5",
    displayName: getProjectStatusDisplay("task_status5", "task"),
    color: "#47C1BF",
    id: 5,
  },
  {
    originalName: "task_status6",
    displayName: getProjectStatusDisplay("task_status6", "task"),
    color: "#50B83C",
    id: 6,
  },
  {
    originalName: "task_status7",
    displayName: getProjectStatusDisplay("task_status7", "task"),
    color: "#FAD200",
    id: 7,
  },
  {
    originalName: "task_status8",
    displayName: getProjectStatusDisplay("task_status8", "task"),
    color: "#FFEA8A",
    id: 8,
  },
  {
    originalName: "task_status9",
    displayName: getProjectStatusDisplay("task_status9", "task"),
    color: "#5C6AC4",
    id: 9,
  },
  {
    originalName: "task_status10",
    displayName: getProjectStatusDisplay("task_status10", "task"),
    color: "#145B39",
    id: 10,
  },
  {
    originalName: "task_status11",
    displayName: getProjectStatusDisplay("task_status11", "task"),
    color: "red",
    id: 11,
  },
];
