import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControllOnOff} from "./UnControllOnOff";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UnControllOnOff/UnControllOnOff',
  component: UnControllOnOff,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UnControllOnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnControllOnOff> = (args) => <UnControllOnOff  />;

export const UnControllOnOffStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
/*
UnControllOnOffStory.args = {
  primary: true,
  label: 'Button',
};
*/

