import { GeneratedList } from "@/interface/GeneratedItems";
import { createStore } from "./createStore";
import { LiveGenerationStore } from "@/interface/LiveGeneration";
import { socket } from "@/lib/socket";

export const useLiveGenerationStore = createStore<LiveGenerationStore>(
  (set, get) => {
    // 🔥 Attach listeners immediately (once per app load)
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    // socket.on("allTasks", (tasks: LiveGenerationItem[]) => {
    //   set({ latestStatusData: tasks });
    // });

    const updateOrAddTask = (data: GeneratedList) => {
      set((state) => {
        const currentTasks = state.latestStatusData ?? [];
        const index = currentTasks.findIndex((t) => t.id === data.id);

        if (index > -1) {
          const updated = [...currentTasks];
          updated[index] = { ...updated[index], ...data };
          return { latestStatusData: updated };
        }

        return { latestStatusData: [...currentTasks, data] };
      });
    };

    socket.on("statusUpdate", updateOrAddTask);

    socket.on("finalData", updateOrAddTask);

    return {
      latestStatusData: [],
      submitPrompt: (prompt: string) => {
        socket.emit("submitPrompt", prompt);
      },
      getStatus: () => {
        socket.emit("getStatus");
      },
    };
  },
  {
    name: "LiveGenerationStore",
    persist: true,
    storageType: "session",
  },
);
