import { create } from "zustand";

export type SidebarState = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const useSidebarToggleStore = create<SidebarState>(
  (set: (arg0: (state: any) => { isSidebarOpen: boolean }) => any) => ({
    isSidebarOpen: false,
    toggleSidebar: () =>
      set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  })
);

export default useSidebarToggleStore;
