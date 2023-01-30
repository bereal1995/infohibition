import BottomSheetModal from '@/components-shared/bottomSheetModal';
import {
  useBottomSheetModalActions,
  useBottomSheetModalValue,
} from '@/states/bottomSheetModal';

function GlobalBottomSheetModal() {
  const { visible, content } = useBottomSheetModalValue();
  const { close } = useBottomSheetModalActions();

  return (
    <BottomSheetModal visible={visible} onClose={close} content={content} />
  );
}

export default GlobalBottomSheetModal;
