import { useRef, useState, useEffect } from 'react';

const useIntersectionObserver = ({ root = null, rootMargin = '0px', threshold = 0 }) => {
  const [entries, setEntries] = useState([]);
  const [observedNodes, setObservedNodes] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(entries => setEntries(entries), {
      root,
      rootMargin,
      threshold
    });

    const { current: currentObserver } = observer;

    for (const node of observedNodes) {
      currentObserver.observe(node);
    }

    return () => currentObserver.disconnect();
  }, [observedNodes, root, rootMargin, threshold]);


  return [entries, setObservedNodes];
};

export default useIntersectionObserver;