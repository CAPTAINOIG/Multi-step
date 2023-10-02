import React, { useEffect, useState } from 'react'
import { handleNextStep, handlePreviousStep } from '../redux/plan'
import { useSelector, useDispatch } from 'react-redux'
import arcade from '../assets/image/arcade.svg'
import Advanced from '../assets/image/advanced.svg'
import Pro from '../assets/image/pro.svg'


const Selectplan = () => {
    const store = useSelector(state => state.plan.planData)
    // console.log(store);


    const [formData, setFormData] = useState({
        isYearPlanLength: false,
        planType: '',
        planAmount: 0,
    })

    // This is a major way of how the checked work
    // const [isSubsribed, setisSubsribed] = useState(false)
    // <label htmlFor="subscribe">
    // <input type="checkbox" value={isSubsribed} onChange={handleChange} id='subscribe' name='subscribe' />
    // subscribe
    // </label>
    // const handleChange = event=> {
    //     if(event.target.checked){
    //         console.log("it is checked");
    //     }
    //     else{
    //         console.log("not checked");
    //     }
    // }
    const availablePlan = ([
        {
            name: 'Arcade',
            monthly: 9,
            yearly: 90,
            image: arcade
        },
        {
            name: 'Advanced',
            monthly: 12,
            yearly: 120,
            image: Advanced
        },
        {
            name: 'Pro',
            monthly: 15,
            yearly: 150,
            image: Pro
        },
    ])


    const dispatch = useDispatch()


    useEffect(() => {
        setFormData((prev) => ({ ...store }))
    }, [])

    const handlePrevious = () => {
        dispatch(handlePreviousStep())
    }
    const handleSubmit = () => {
        const { planType, planAmount  } = formData
        if (planType && planAmount) {
            dispatch(handleNextStep(formData))
        }
    }
    const updateForm = (id) => {
        const newPlan = availablePlan[id]
        setFormData({
            ...formData, planType: newPlan.name,
            planAmount: formData.isYearPlanLength ? newPlan.yearly : newPlan.monthly,
        })
    }


    return (
        <>
            <div className="stepPlan" id="stepPlan">
                <h1 className='text-3xl mt-5 font-bold font-sans'>Select your plan</h1>
                <p className='mt-5'>You have the option of monthly or yearly billing.</p>

                <div className="planMonth" id="planMonth">


                    {
                        availablePlan?.map((item, i) => (
                            <button key={i} className={`planButton ${item.name === formData.planType ? 'active' : ''}`} onClick={() => updateForm(i)}>
                                <img src={item.image} alt="" />

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    <p>{item.name}</p>
                                    <span className="">{formData?.isYearPlanLength ? item.yearly + '$' : item.monthly + '$'}/ {formData?.isYearPlanLength ? "yr" : "mo"}</span>
                                    {formData.isYearPlanLength && <span className="yeartype">2 months free</span>}
                                </div>
                            </button>

                        ))

                    }


                </div>
                <div className='switch'>
                    <p className='mt-3'>Monthly</p>
                    <label className='check'>
                        <input type="checkbox" id='checkbox' name='planLenngth' checked={formData.isYearPlanLength} onChange={(e) => setFormData({ ...formData, isYearPlanLength: e.target.checked, planType: '', planAmount: 0 })} />
                        <span></span>
                    </label>
                    <p className='mt-3'>Yearly</p>

                </div>
            </div>
            <div className='lg:flex flex lg:gap-0 gap-[120px] mt-10'>
                <button className='text-xl' onClick={handlePrevious}>Back</button>
                <button onClick={handleSubmit} className='bg-blue-800 text-white rounded lg:ms-96 ms-26 lg:mt-0 lg:p-3 p-2 lg:w-[25%] w-[105px]'>CONFIRM</button>
            </div>

        </>
    )
}

export default Selectplan