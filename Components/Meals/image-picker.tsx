'use client'

import { useRef } from 'react'
import classes from './image-picker.module.css'


export default function ImagePicker({label, name} : any){

    const imageInputRef = useRef();

    // const handlePickClick = () => {
    //     if(imageInputRef && imageInputRef.current){
    //       imageInputRef.current.click();
    //     }
    // }

    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.control}>
                <input
                    // className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                   // ref={imageInputRef}
                />
            </div>

            <button
                className={classes.button}
                type="button"
                // onClick={handlePickClick}
            >PICK AN IMAGE</button>
        </div>
    )
}