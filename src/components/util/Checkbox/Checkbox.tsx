import React, { useState } from 'react'

const Checkbox = (props: {text: string, handleToggle: (event: any)=>void}) => {

    const [checked, setChecked] = useState<boolean>(true);
    
    const toggle = () => {
        setChecked(!checked);
    }
    
    return (
        <div>
            <div className="custom-control custom-checkbox mb-3">
                <input
                    className="custom-control-input"
                    id={`customCheck${props.text}`}
                    type="checkbox"
                    onChange={(event: any) => {toggle(); props.handleToggle(event); }}
                    checked={checked}
                />
                <label className="custom-control-label" htmlFor={`customCheck${props.text}`}>
                    {props.text}
                </label>
            </div>
        </div>
    )
}

export default Checkbox
