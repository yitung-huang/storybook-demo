import { useEffect, useState } from "react";

export const useProgressIndicator = (props) => {
  const { animationDuration, coloursAnimation, defaultColour, percentage } =
    props;
  const [colour, setColour] = useState(defaultColour);
  const [progress, setProgress] = useState(0);

  const convertedAnimationDuration = `${animationDuration / 1000}s`;
  const coloursAnimations = [
    { colour: defaultColour, threshold: 0 },
    ...coloursAnimation
  ].sort(
    (animationA, animationB) => animationB.threshold - animationA.threshold
  );

  useEffect(() => {
    setProgress(percentage);
    const animation = coloursAnimations.find(
      ({ threshold }) => percentage >= threshold * 100
    );
    if (animation) {
      setColour(animation.colour);
    }
  }, [coloursAnimations, percentage]);

  return { animationDuration: convertedAnimationDuration, colour, progress };
};
