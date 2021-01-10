import { useState, useEffect } from 'react';

// view is the width of the container which will the carousel slide to on (Next|Prev)
export function useSlider(ref, view) {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const print = (event) => {
    const { scrollLeft } = event.target;
    console.log(scrollLeft);
    if (scrollLeft != 0) {
      setShowPrev(true);
    } else {
      setShowPrev(false);
    }
  };

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('scroll', print);
    }
  }, [ref]);

  const slideRight = () => {
    const width = ref.current.offsetWidth / view;
    ref.current.scrollLeft += width;
    ref.current.scrollLeft += width;
  };
  const slideLeft = () => {
    const width = ref.current.offsetWidth / view;
    ref.current.scrollLeft -= width;
    ref.current.scrollLeft -= width;
  };
  return { slideLeft, slideRight, showPrev };
}

// TODO
// Render PREV/NEXT buttons based on viewport
// Find out how to get the max scroll
