import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
  toggleModal: () => void;
  openModal: (
    modalType: string,
    title: string,
    text: string,
    cta: () => void
  ) => void;
  title: string;
  message: string;
  modalType: string;
  callback: () => void;
};

const useNotificationModalStore = create<ModalState>((set) => ({
  isOpen: false,
  message: "",
  modalType: "",
  title: "",
  callback: () => {
    return;
  },
  openModal: (
    modalType: string,
    title: string,
    text: string,
    callback: () => void
  ) =>
    set((state) => ({
      isOpen: true,
      message: text,
      modalType: modalType,
      title: title,
      callback: callback,
    })),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useNotificationModalStore;
