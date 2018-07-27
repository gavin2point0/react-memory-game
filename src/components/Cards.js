import React from 'react'

const Cards = (props) => {


    return (
        <div className="card">
            <img src={props.image} onClick={() => props.updateImage( props.id, props.clicked )}/>
        </div>
    )
}


export default Cards;