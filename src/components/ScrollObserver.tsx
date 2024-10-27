import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      rootMargin: '-50px 0px'
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('visible');
        } else {
          // Only remove the visible class if the element is completely out of view
          if (entry.intersectionRatio === 0) {
            entry.target.classList.remove('visible');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections except home
    document.querySelectorAll('section:not(#home)').forEach(section => {
      observer.observe(section);
    });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-element').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}