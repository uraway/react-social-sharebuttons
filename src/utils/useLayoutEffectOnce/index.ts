import { useLayoutEffect, EffectCallback, useRef } from 'react';

export function useLayoutEffectOnce(effect: EffectCallback): void {
  const effectRef = useRef(effect);
  useLayoutEffect(() => effectRef.current(), []);
}
