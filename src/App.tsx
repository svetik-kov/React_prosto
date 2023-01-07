import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <AppTitle title={'This is App components'}/>
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
            <Rating value={4}/>
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
