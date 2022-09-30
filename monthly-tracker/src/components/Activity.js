import React from 'react'

function Activity({ activityNames, handleClose, monthName, month, handleDays }) {
    return (
        <>
            {activityNames.map((a, i) => {
                return (
                    <div className='flex flex-column flex-center align-center' key={i}>
                        <div className='box flex flex-space border-radius-3'>
                            <div className='activityName flex flex-column flex-center align-center'>
                                <h2>{a.activity}</h2>
                                <p className='border-radius-2'>{monthName[month]}</p>
                            </div>
                            <div className='totalDays grid column-10 c-gap r-gap'>
                                <Days totalDays={a.days} handleDays={handleDays} activityname={a.activity} />
                            </div>
                            <div className='cross flex flex-center align-center border-redius-circle' onClick={() => handleClose(a.activity)}>✖</div>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

function Days({ totalDays, handleDays, activityname }) {
    return totalDays.map((elm) =>
        <div
            key={elm.day}
            className={`flex flex-center align-center border-radius-3 ${elm.isActive ? 'active' : ''}`}
            onClick={() => handleDays(activityname, elm.day)}
        >
            {elm.day}
        </div>)
}


export default Activity