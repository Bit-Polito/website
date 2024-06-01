import { useEffect } from 'react';

export const useBodyClassChangeEffect = (callback) => {
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          callback();
          break;
        }
      }
    });

    observer.observe(document.body, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [callback]);
};