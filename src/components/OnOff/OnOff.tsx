import React from 'react';

type OnOffType={
    on:boolean
    callBack:(on:boolean)=>void
}
export const OnOff = (props:OnOffType) => {
    const onStyle={
        width:'30px',
        height:'20px',
        border:'1px solid black',
        display:'inline-block',
        padding:'2px',
        backgroundColor:props.on?'green':'white'
    }
    const offStyle={
        width:'30px',
        height:'20px',
        border:'1px solid black',
        display:'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on?'white':'red'
    }
    const indicatorStyle={
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        border:'1px solid black',
        display:'inline-block',
        marginLeft:'10px',
        backgroundColor:props.on?'green':'red'
    }
    return (
        <div>
           <div style={onStyle} onClick={()=>props.callBack(true)}>On</div>
            <div style={offStyle} onClick={()=>props.callBack(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

