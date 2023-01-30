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

const useBottomSheetModalStore = create<BottomSheetModalState>()(
  devtools(
    (set) => ({
      ...initialState,
      open: (content: any) => {
        set({ visible: true, content });
      },
      close: () => {
        set((prev) => ({ ...prev, visible: false }));
      },
    }),
    {
      name: 'bottomSheetModal',
    }
  )
);

export function useBottomSheetModalValue() {
  const { visible, content } = useBottomSheetModalStore();
  return { visible, content };
}

export function useBottomSheetModalActions() {
  const open = useBottomSheetModalStore((state) => state.open);
  const close = useBottomSheetModalStore((state) => state.close);
  return { open, close };
}
