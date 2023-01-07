import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControllOnOff} from "./components/UnControllOnOff/UnControllOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    const [ratingValue,setRatingValue]=useState<RatingValueType>(0)
    const [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false)
    const [on,setOn]=useState<boolean>(false)

    return (
        <div className="App">
            <AppTitle title={'This is App components'}/>
            <OnOff on={on} callBack={setOn} />
            {/*<OnOff on={false}/>
            <OnOff on={true}/>*/}
            Article 1
            <Rating value={ratingValue} callBack={setRatingValue}/>

           <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       callBack={setAccordionCollapsed}/>
//2 способ
           {/* <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       callBack={()=>setAccordionCollapsed(!accordionCollapsed)}/>*/}


            {/* <Accordion titleValue={'User'} collapsed={accordionCollapsed}/>*/}
           {/* Article 2
            <Rating value={4}/>*/}


           {/* <UnControllOnOff/>
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'User'}/>
            <UnControlledRating/>*/}


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
