// Slider Hook

export function useSlider(ref) {
  const slideRight = () => {
    const width = ref.current.offsetWidth / 2;
    ref.current.scrollLeft += width;
  };
  const slideLeft = () => {
    const width = ref.current.offsetWidth / 2;
    ref.current.scrollLeft -= width;
  };
  return { slideLeft, slideRight };
}

// TODO
// Render PREV/NEXT buttons based on viewport
