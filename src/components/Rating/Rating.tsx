import React from "react";
export type RatingValueType=0 | 1 | 2 | 3 | 4 | 5

type RatingType= {
    value: RatingValueType
    callBack:(value:RatingValueType)=>void

}

export function Rating(props:RatingType) {
    return (
        <div>
            <Star selected={props.value > 0} callBack={props.callBack} value={1}/>
            <Star selected={props.value > 1} callBack={props.callBack} value={2}/>
            <Star selected={props.value > 2} callBack={props.callBack} value={3}/>
            <Star selected={props.value > 3} callBack={props.callBack} value={4}/>
            <Star selected={props.value > 4} callBack={props.callBack} value={5}/>
        </div>
    )

}
type StarType={
    selected:boolean
    value:RatingValueType
    callBack:(value:RatingValueType)=>void
}
function Star(props: StarType) {
    return(
        <span onClick={()=>props.callBack(props.value)}>
           {props.selected? <b>Star </b>:'Star'}
        </span>
    )
   }