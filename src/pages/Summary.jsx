import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange, handleNextStep, handlePreviousStep } from '../redux/plan'


const Summary = () => {
    const [summary, setSummary] = useState({

        isYearPlanLength: false,
        planType: '',
        planAmount: 0,

        addOnTypes: [],
        addOnTotalAmount: 0
    })
    // var a  = 0

    // const  g = useRef(2)


    useEffect(() => {
        setSummary((prev) => ({ ...store }))
    }, [])

    // g.current = 3
    useEffect(() => {
      let totalAddOn = 0
        store.addOnTypes?.map(item=>{
            if(store.isYearPlanLength){
                totalAddOn += Number(item.yearly)
            }else{
                totalAddOn += Number(item.monthly)
            }
            // return item
        })
        console.log(totalAddOn)

        setSummary(prev => ({...prev, addOnTotalAmount: totalAddOn}))
        // setCounter(1)
        // setCounter(prev=> prev + 2)
    }, [])
    

    // useEffect(() => {
        // [1,2,3] [{}, {}]    //     setSummary((prev) => ({ ...store, AddonTotalAmount: store.isYearPlanLength ? store.AddonTypes?.reduce((a, { yearly }) => a + yearly, 0) : store.AddonTypes?.reduce((a, { monthly }) => a + monthly, 0) }))


    // }, [])

    const store = useSelector(state => state.plan.planData)
    // console.log(store);

    const dispatch = useDispatch()

    const handlePrevious = () => {
        dispatch(handlePreviousStep())
    }
    const handleNext = () => {
        dispatch(handleNextStep())
    }

    const change = () => {
        dispatch(handleChange())
    }
    return (
        <>
            <div>
                <h1 className='text-4xl mt-5 font-bold font-mono'>Finishing up</h1>
                <p className='mt-5 font-mono'>Double-check if everything looks OK before confirming.</p>
            </div>
            <div className="border bg-gray-100 rounded mt-5 px-5 py-4">
                <div>
                    <div className='lg:flex flex justify-between lg:my-5'>
                        {
                            <div>
                                <span className='text-1xl font-bold'>{summary.planType}</span>
                                <span className='text-1xl font-bold'>{summary.isYearPlanLength ? '(Yearly)' : '(monthly)'}</span>
                                <p><button className='text-blue-900 ' onClick={change}>change</button></p>
                            </div>
                        }
                        <p className='lg:ms-8 text-1xl mt-5 font-bold'>${summary?.planAmount}/{!summary?.isYearPlanLength ? "mo" : "yr"}</p>
                    </div>
                    {
                        summary.addOnTypes.map((item, i) => (
                            <div key={i} className="flexResume">
                                <p className='text-1xl mt-5 font-bold'>{item.name}</p>
                                <p className='text-1xl mt-5 font-bold' htmlFor="" >${summary?.isYearPlanLength ? item?.yearly : item?.monthly}/ {summary?.isYearPlanLength ? "yr" : "mo"}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex lg:ms-10 mt-5">
                <p className='font-bold text-2xl'>Total</p>
                <span className="lg:ms-80 font-bold ms-40 text-2xl">${summary?.addOnTotalAmount + summary?.planAmount}</span>
            </div>

            <div className='lg:flex flex lg:gap-0 gap-[120px] mt-10'>
                <button className='text-xl' onClick={handlePrevious}>Back</button>
                <button onClick={handleNext} className='bg-blue-800 text-white rounded lg:ms-96 ms-26 lg:mt-0 lg:p-3 p-2 lg:w-[25%] w-[105px]'>CONFIRM</button>
            </div>
        </>
    )
}

export default Summary