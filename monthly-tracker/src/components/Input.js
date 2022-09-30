import React from 'react'

function Input({ handleInput }) {
    return (
        <>
            <form onSubmit={handleInput} className='flex flex-center'>
                <input name='text' type='text' placeholder='e.g. coding'/>
                <button type='submit'>Add Activity</button>
            </form>
        </>
    )
}

export default Input