import PropTypes from "prop-types";

export const Greeting = (props) => {
  const { user } = props;
  return <div>{`Hello, ${user.name}`}</div>;
};

Greeting.propTypes = {
  /**
   * The logged in user's details
   */
  user: PropTypes.shape({
    name: PropTypes.string
  }),
  /**
   * The logged in user's first name.
   */
  "user.name": PropTypes.string
};
