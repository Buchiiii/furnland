import { FastField,ErrorMessage } from "formik"
import { useState } from "react"
import { inputProps } from "./Types"
export const Input=({name,label,type}:inputProps)=>{
    const [hide,sethide]=useState<string>(type)
    return(
        <div>
            <div className="mb-3">
                <div className="d-flex justify-content-between">
                <label className="form-label"htmlFor={name}>{label}</label>
                {name === "password" ? <span className="ms-5"><button type="button" onClick={()=>sethide("text")}>Hey</button></span> : null}
                    </div>
                <FastField className="form-control" name={name} type={hide} id={name} />
                <ErrorMessage name={name} component="div" className="text-danger"/>
            </div>
        </div>
    )
}