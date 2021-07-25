import { Ref } from "vue";

interface ICommon {
  project_name: string;
  color?: string;
  status: string;
  event_name?: string;
}

export interface IProject extends ICommon {
  project_id: number;
}

export interface ITask extends ICommon {
  event_id: number;
}

export type IListItem = IProject & ITask;

export interface IStateRef {
  isLoading: Ref<boolean>;
  projects: Ref<IProject[]>;
  tasks: Ref<ITask[]>;
  error: Ref<string | null>;
  statusItems: Ref<IStatusItem[]>;
  selected: Ref<ISelectedStatus | null>;
  isOpen: Ref<boolean>;
  isButtonClicked: Ref<boolean>;
}

export interface IState {
  isLoading: boolean;
  projects: IProject[];
  tasks: ITask[];
  error: string | null;
  statusItems: IStatusItem[];
  selected: ISelectedStatus | null;
  isOpen: boolean;
  isButtonClicked: boolean;
}

export interface IMutation {
  setProjects: (projects: IProject[]) => void;
  setTasks: (tasks: ITask[]) => void;
  setLoading: (value: boolean) => void;
  setError: (error: string | null) => void;
  setStatusItems: (statusItems: IStatusItem[]) => void;
  updateSelected: (selectedItem: ISelectedStatus | null) => void;
  toggleOpenState: (selectedItem: ISelectedStatus | null) => void;
  updateItemStatus: (
    id: number,
    updateValue: { status: ProjectStatus | TaskStatus; color: string },
    type: ItemType
  ) => void;
}

export interface IActions {
  getProjectsList: () => Promise<void>;
  getTasksList: () => Promise<void>;
}

export interface IStore extends IStateRef {
  mutations: IMutation;
  actions: IActions;
}

export interface IResponseStatus {
  status: "OK" | "ERROR";
  statusCode: number;
  messages: null | { error: string[] };
}

export type ProjectStatus =
  | "pending"
  | "inprogress"
  | "cancelled"
  | "completed"
  | "future"
  | "draft"
  | "needsprep"
  | "needsestimates"
  | "planned"
  | "needsinput"
  | "waiting"
  | "needstesting"
  | "testing"
  | "needsreview"
  | "needsattention";

export type TaskStatus =
  | "task_status1"
  | "task_status2"
  | "task_status3"
  | "task_status4"
  | "task_status5"
  | "task_status6"
  | "task_status7"
  | "task_status8"
  | "task_status9"
  | "task_status10"
  | "task_status11";

export type ItemType = "project" | "task";

interface IStatusCommon {
  originalName: ProjectStatus | TaskStatus;
  color: string;
}

export interface IStatusItem extends IStatusCommon {
  displayName: string;
  id: number;
}

export interface ISelectedStatus extends IStatusCommon {
  id: number;
}
