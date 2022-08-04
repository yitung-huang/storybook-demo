import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { useProgressIndicator } from "./talons/useProgressIndicator";

import { mergeClasses } from "../../utils/classify";

import defaultClasses from "./ProgressIndicator.module.scss";

/**
 * A progress indicator which displays percentage of progress.
 */
export const ProgressIndicator = (props) => {
  const { animate } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  const { animationDuration, colour, progress } = useProgressIndicator(props);

  return (
    <div className={classes.container}>
      <div
        className={classnames(classes.progress, {
          [classes.animate]: animate
        })}
        style={{
          backgroundColor: colour,
          transitionDuration: `${animationDuration}`,
          width: `${progress}%`
        }}
      ></div>
    </div>
  );
};

ProgressIndicator.propTypes = {
  /**
   * Whether to animate progress on render
   */
  animate: PropTypes.bool,

  /**
   * Animation duration in milliseconds.
   */
  animationDuration: PropTypes.number,

  /**
   * Threshold value and HEX colour strings for colour animation
   */
  coloursAnimation: PropTypes.arrayOf(
    PropTypes.shape({
      // These don't show up in the docs </3
      /**
       * Colour string that makes sense in CSS. E.g. 'red', #DD88FA, rgb(132, 42, 0) ... etc
       */
      colour: PropTypes.string,
      /**
       * Value of which the progress has exceeded in order to apply this colour
       */
      threshold: PropTypes.number
    })
  ),
  /**
   * Colour string that makes sense in CSS. E.g. 'red', #DD88FA, rgb(132, 42, 0) ... etc
   */
  "coloursAnimation.colour": PropTypes.string,
  /**
   * Default colour for 0% progress
   */
  defaultColour: PropTypes.string.isRequired,

  /**
   * Whether to display progress percentage
   */
  displayPercentage: PropTypes.bool,

  /**
   * Progress in percentage
   */
  percentage: PropTypes.number.isRequired,

  /**
   * The shape of the progress indicator - either a horizontal bar or a circle
   */
  type: PropTypes.oneOf(["bar", "circular"])
};

ProgressIndicator.defaultProps = {
  animate: false,
  animationDuration: 500,
  coloursAnimation: [],
  /**
   * A cute lime green - this doesn't show up in the docs
   */
  defaultColour: "#42ba00",
  displayPercentage: false,
  type: "bar"
};
