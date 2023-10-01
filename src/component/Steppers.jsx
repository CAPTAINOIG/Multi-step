import React from 'react'
import '../Styles/Steppers.css'

const Steppers = ({ currentIndex }) => {

    <h1>hello</h1>
    const steps = [
        "YOUR INFO",
        "SELECT PLAN",
        "ADD-ONS",
        "SUMMARY"
    ]
    return (
        <>

            <div className='displayStep'>
                <div className='circle'>
                    {
                        steps.map((item, i) => (
                            <div key={i} className={`${currentIndex === i ? 'circle_active' : 'circle_default'}`}>
                                <p>{i + 1}</p> </div>
                        ))

                    }
                </div>

                <div className='steps'>
                    {
                        steps.map((item, i) => (
                            <div key={i}>
                                <p className='step1'>STEP{i + 1}</p>
                                <span>{item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Steppers