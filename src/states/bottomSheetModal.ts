import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface BottomSheetModalState {
  visible: boolean;
  content: any;
  open(content: any): void;
  close(): void;
}

const initialState: BottomSheetModalState = {
  visible: false,
  content: null,
  open: () => {},
  close: () => {},
};

const bottomSheetModalStore = create<BottomSheetModalState>()(
  devtools((set) => ({
    ...initialState,
    open: (content: any) => {
      set({ visible: true, content });
    },
    close: () => {
      set((prev) => ({ ...prev, visible: false }));
    },
  }))
);

export function useBottomSheetModalValue() {
  const { visible, content } = bottomSheetModalStore();
  return { visible, content };
}

export function useBottomSheetModalActions() {
  const open = bottomSheetModalStore((state) => state.open);
  const close = bottomSheetModalStore((state) => state.close);
  return { open, close };
}
