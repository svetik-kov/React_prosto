import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControlledAccordion} from "./UnControlledAccordion";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UnControlledAccordion/UnControlledAccordion',
  component: UnControlledAccordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof UnControlledAccordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnControlledAccordion> = (args) => <UnControlledAccordion {...args} />;

export const UnControlledAccordionStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnControlledAccordionStory.args = {
  titleValue: 'User',
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
