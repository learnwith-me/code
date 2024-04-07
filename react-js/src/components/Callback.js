import React from 'react'

// child COmponent
const Callback = ({ getText }) => {

    const handleChange = (e) => {
        getText(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default Callback
