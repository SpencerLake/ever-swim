import React, { useState, useEffect, useRef } from 'react'

export default function Retrieve(props) {

    
    
    props.map((props)=>{

        const iId = `"${props.id}"`
        const iPic = props.image
        const iTitle = props.title
        const iDescrip = props.description

        console.log(iId, iPic, iTitle, iDescrip)

        return (
            // console.log(props)
            <div className="testItem" ref={iId}>
                <p>{iTitle}</p>
                <img src={iPic} className="testPic" alt='swimsuit'></img>
                <p className='testDescrip'>{iDescrip}</p>
            </div>
        )
    })
}
