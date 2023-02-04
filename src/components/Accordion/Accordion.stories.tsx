import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default
{
    title: 'ACCORDION/Accordion',
    component:Accordion ,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
           callBack:{
            control:'Accordion mode change fired'}
    },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const MenuCollapsedModeStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

MenuCollapsedModeStory.args = {
    titleValue: 'MENU',
    collapsed: true,
    callBack: action('Accordion mode change fired')
};


export const UsersCollapsedModeStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

UsersCollapsedModeStory.args = {
    titleValue: 'USERS',
    collapsed: false,
    callBack: action('Accordion mode change fired')
};

