import { useState, useEffect } from 'react';

// view is the width of the container which will the carousel slide to on (Next|Prev)
export function useSlider(ref, view = 1) {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  // Size in which we can use to render dotted statte
  // const size = Math.ceil(ref.current.scrollWidth / ref.current.clientWidth);
  // console.log(size);

  const trackScroll = (event) => {
    const { scrollLeft, clientWidth, scrollWidth } = event.target;
    // Max scroll width
    const maxWidth = scrollLeft + clientWidth;

    if (scrollLeft != 0) {
      setShowPrev(true);
    } else {
      setShowPrev(false);
    }

    if (maxWidth === scrollWidth) {
      setShowNext(false);
    } else {
      setShowNext(true);
    }
  };

  useEffect(() => {
    if (ref && ref.current) {
      const { scrollWidth, clientWidth } = ref.current;

      if (scrollWidth === clientWidth) {
        setShowNext(false);
      }

      ref.current.addEventListener('scroll', trackScroll);
    }
  }, [ref, setShowNext]);

  const next = () => {
    const width = ref.current.offsetWidth / view;
    ref.current.scrollLeft += width;
    ref.current.scrollLeft += width;
  };
  const previous = () => {
    const width = ref.current.offsetWidth / view;
    ref.current.scrollLeft -= width;
    ref.current.scrollLeft -= width;
  };
  return { next, previous, showPrev, showNext };
}

// TODO
// Render PREV/NEXT buttons based on viewport
// Find out how to get the max scroll
