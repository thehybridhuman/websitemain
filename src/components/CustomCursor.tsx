import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    document.addEventListener('mousemove', onMouseMove, {
      passive: true,
      capture: true
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove, { capture: true });
    };
  }, []);

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-[#80ffdb] pointer-events-none z-[9999] rounded-full mix-blend-normal"
      style={{
        boxShadow: '0 0 10px 2px rgba(128, 255, 219, 0.3)',
        transform: 'translate3d(-100%, -100%, 0)',
        willChange: 'transform',
        WebkitBackfaceVisibility: 'hidden',
        WebkitTransform: 'translate3d(0,0,0)',
        WebkitPerspective: 1000,
        WebkitTransformStyle: 'preserve-3d'
      }}
    />
  );
}