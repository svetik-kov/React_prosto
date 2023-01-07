import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControllOnOff} from "./components/UnControllOnOff/UnControllOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    return (
        <div className="App">
            {/*<AppTitle title={'This is App components'}/>
            <OnOff on={true}/>
            <OnOff on={false}/>
            <OnOff on={true}/>
            Article 1
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'User'} collapsed={false}/>
            Article 2
            <Rating value={4}/>*/}


            <UnControllOnOff/>
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'User'}/>
            <UnControlledRating/>


        </div>
    );
}

type AppTitleType={
    title:string
}
function AppTitle(props:AppTitleType) {
    return <div>{props.title}</div>
}





export default App;
