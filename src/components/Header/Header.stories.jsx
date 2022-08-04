import React from "react";

import { Greeting } from "./Greeting";
import { Header } from "./Header";

import { expect } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";

export default {
  title: "Example/Header",
  component: Header,
  subcomponents: { Greeting },
  argTypes: {
    onLogout: { action: true }
  }
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Hummus"
  }
};
LoggedIn.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.onLogout).toHaveBeenCalled());
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
