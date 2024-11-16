import { create } from 'zustand';

interface UploadModalStore {
  isOpen: boolean;
  isUploadTab: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpen: (uploadTab?: boolean) => void;
  onClose: () => void;
}

const useUploadModal = create<UploadModalStore>((set) => ({
  isOpen: false,
  isUploadTab: false,
  onOpen: (uploadTab?: boolean) =>
    set({ isOpen: true, isUploadTab: uploadTab }),
  onClose: () => set({ isOpen: false, isUploadTab: false }),
}));

export { useUploadModal };
