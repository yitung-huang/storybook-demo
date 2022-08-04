import React from "react";

import { Greeting } from "./Greeting";
import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  subcomponents: { Greeting }
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Hummus"
  }
};
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
