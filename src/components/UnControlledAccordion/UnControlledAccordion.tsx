import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={() => {setCollapsed(!collapsed)}}/>
          {/*  <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitleType = {
    title: string
    callBack:()=>void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h1 onClick={props.callBack}>{props.title}</h1>
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