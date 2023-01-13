import { useRef, useEffect } from 'react';

const useDidMountEffect = (callBack: Function) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      callBack();
      didMount.current = true;
    }
  }, [callBack]);

  return didMount.current;
};

export default useDidMountEffect;
