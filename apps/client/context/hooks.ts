import { useEffect, MutableRefObject } from 'react';
import { useIntersection } from 'react-use';

export const useInfiniteTrigger = (
  ref: MutableRefObject<any>,
  thunk: Function,
) => {
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  useEffect(() => {
    if (intersection?.intersectionRatio == 1) {
      thunk();
    }
  }, [intersection]);
};
