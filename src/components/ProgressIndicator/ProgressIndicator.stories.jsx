import React from "react";

import { ProgressIndicator } from "./ProgressIndicator";

export default {
  title: "Custom Examples/ProgressIndicator (JSX version)",
  component: ProgressIndicator,
  argTypes: {
    defaultColour: { control: "color" }
  },
  parameters: {
    docs: {
      description: {
        component: `I'm overriding the component descriptions from the story book file. _Here are some markdown_!`
      }
    }
  }
};

const ProgressIndicatorStory = ({ story, ...args }) => {
  const { maxWidth = "unset" } = story;
  return (
    <div style={{ maxWidth }}>
      <ProgressIndicator {...args} />
    </div>
  );
};

export const Default = ProgressIndicatorStory.bind({});
Default.args = {
  story: {
    maxWidth: "300px"
  },
  percentage: 30
};
Default.parameters = {
  docs: {
    description: {
      story: "Hello, I am the most basic model you can find in this factory!"
    }
  }
};

export const Animated = ProgressIndicatorStory.bind({});
Animated.args = {
  story: {
    maxWidth: "450px"
  },
  animate: true,
  percentage: 40
};
Animated.parameters = {
  docs: {
    description: {
      story:
        "Hello, I am a slightly more sophisticated model which has a simple, pre-programmed animation!"
    }
  }
};

export const CustomisedAnimation = ProgressIndicatorStory.bind({});
CustomisedAnimation.args = {
  story: {
    maxWidth: "700px"
  },
  animate: true,
  animationDuration: 2000,
  coloursAnimation: [
    { colour: "red", threshold: 0.33 },
    { colour: "orange", threshold: 0.67 },
    { colour: "#42ba00", threshold: 0.9 }
  ],
  defaultColour: "black",
  percentage: 75
};
CustomisedAnimation.parameters = {
  docs: {
    description: {
      story:
        "Hello, I am the most fancy one yet - I have custom animation duration, colours, as well as timing!"
    }
  }
};
