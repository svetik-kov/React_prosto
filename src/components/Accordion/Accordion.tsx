import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return(
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

        )


    /*if (props.collapsed){
        return (
            <><AccordionTitle title={props.titleValue}/></>
        ) } else {
        return (
            <>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </> )*/
    }


export function Accordion2(props: AccordionPropsType) {
    if (props.collapsed){
        return (
            <><AccordionTitle title={props.titleValue}/></>
        ) } else {
        return (
            <>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </> )
    }
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h1>{props.title}</h1>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}