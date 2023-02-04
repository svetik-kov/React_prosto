import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'OnOff/OnOff',
  component: OnOff,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    callBack: { control: 'OnOff' },
  },
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnOffStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnOffStory.args = {
  on: true,
  callBack:action('OnOff'),
};

/*
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
