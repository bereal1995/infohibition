import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';

import Overlay from '@/components-shared/system/Overlay';

interface Props {
  visible: boolean;
  content: any;
  onClose(): void;
}

function BottomSheetModal({ visible, onClose, content }: Props) {
  return (
    <>
      <style global jsx>
        {`
          body {
            overflow: ${visible ? 'hidden' : 'auto'};
          }
        `}
      </style>
      <Overlay visible={visible} onClick={onClose} />
      <Positioner>
        <AnimatePresence>
          {visible && (
            <Sheet
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{
                damping: 0,
              }}
            >
              {content}
            </Sheet>
          )}
        </AnimatePresence>
      </Positioner>
    </>
  );
}

const Positioner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
`;

const Sheet = styled(motion.div)`
  background: white;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export default BottomSheetModal;
