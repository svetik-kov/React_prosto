import React from "react";

 export function Accordion() {
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/></>

    )
}

function AccordionTitle() {
    return (
        <h1>Menu</h1>
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