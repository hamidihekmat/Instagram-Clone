import { useState } from 'react';

// view is the width of the container which will the carousel slide to on (Next|Prev)
export function useSlider(ref, view) {
  const [value, setValue] = useState(false);
  const slideRight = () => {
    if (value <= view) {
      const width = ref.current.offsetWidth / view;
      ref.current.scrollLeft += width;
      setValue(value + 1);
    }
  };
  const slideLeft = () => {
    if (value != 0) {
      const width = ref.current.offsetWidth / view;
      ref.current.scrollLeft -= width;
      setValue(value - 1);
    }
  };
  return { slideLeft, slideRight, value };
}

// TODO
// Render PREV/NEXT buttons based on viewport
