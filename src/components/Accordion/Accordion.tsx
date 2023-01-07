import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callBack:( collapsed:boolean)=>void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            callBack={props.callBack}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitleType = {
    title: string
    collapsed:boolean
    callBack:(collapsed:boolean)=>void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
               <h2 onClick={()=>{props.callBack(!props.collapsed)}}>{props.title}</h2>
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