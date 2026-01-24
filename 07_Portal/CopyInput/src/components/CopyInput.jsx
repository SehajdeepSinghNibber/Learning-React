import React, { useState } from 'react'
import PopupContent from './PopupContent'

    const CopyInput = () => {

        const[inputValue, setInputValue] = useState('')
        const[copy,setCopy] = useState(false)

        const handleCopy =()=>{
            navigator.clipboard.writeText(inputValue).then(()=>{
                setCopy(true)
                setTimeout(()=>setCopy(false),1150)
            })
        }

        const copyValue = () => {
        if (copy === false) {
        return 'Copy'
        } else {
        return 'Copied'
        }
    }

    return (
        <div>
        <input type="text"
        value={inputValue}
        placeholder=''
        onChange={e=>setInputValue(e.target.value)} />
        <button onClick={handleCopy}>{copyValue()}</button>
        <PopupContent copy={copy}/>
        </div>
    )
    }

    export default CopyInput
