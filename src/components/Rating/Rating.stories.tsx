import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from "./Rating";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RATING/Rating',
  component: Rating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    callBack:{
      control:'Rating stories'
    }},
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const PrimaryStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

PrimaryStory.args = {
  callBack: action('Rating stories')
};


