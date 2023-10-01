import React, { useState, useEffect } from 'react'
import { handleNextStep, handlePreviousStep } from '../redux/plan'
import { useDispatch, useSelector } from 'react-redux'


const Addon = () => {
    // const [FormData, setFormData] = useState(second)
    const [addOn, setAddOn] = useState({
        addOnTypes: [],
        isYearPlanLength: false
    })

    const store = useSelector(state => state.plan.planData)
    console.log(store);
    const available = ([
        {
            name: 'Online services',
            desc: 'Access to multiplayer games',
            monthly: '1',
            yearly: '10',
            id: 1
        },
        {
            name: 'Larger storage',
            desc: 'Extra 1TB of cloud save',
            monthly: '2',
            yearly: '20',
            id: 2
        }, {
            name: 'Customizable profile',
            desc: 'Custom theme on your profile',
            monthly: '2',
            yearly: '20',
            id: 3
        },
    ])

    const dispatch = useDispatch()

    useEffect(() => {
        setAddOn((prev) => ({ ...store }))
    }, [])

    const handlePrevious = () => {
        dispatch(handlePreviousStep())
    }

    const handleSubmit = () => {
        const { addOnTypes } = addOn
        if (addOnTypes) {
            dispatch(handleNextStep(addOn))
        }
    }


    const handleChange = (val, id) => {

        const exist = addOn.addOnTypes?.find((ad) => ad?.id === id)

        if (exist) {
            setAddOn({
                ...addOn, addOnTypes: [...addOn?.addOnTypes?.filter(type => type.id !== id)]
            })
        } else {
            setAddOn({
                ...addOn, addOnTypes: [...addOn.addOnTypes, { ...val }]
            })

        }

    }
    return (
        <div>
            <h1 className='text-4xl mt-5 font-bold font-sans'>Pick add-ons</h1>
            <p className='my-4 text-xl font-sans'>Add-ons help enhance your gaming experience.</p>
            {
                available.map(item => (
                    <label key={item.id} htmlFor={`addon${item.id}`}>
                        <div className={`addOnButton ${addOn?.addOnTypes?.some(val => val.id === item.id) && 'active'}`}>


                            <div className="regroup">
                                <input type="checkbox" checked={addOn.addOnTypes.some(val => val.id === item.id)} id={`addon${item.id}`}
                                    name="addOn" onChange={(e) => handleChange(item, item.id)} />
                            </div>

                            <div className="addOn">
                                <p className="AddSize">{item.name}</p>
                                <span>{item.desc}</span>
                            </div>
                            <p className="prix">+${addOn?.isYearPlanLength ? item.yearly : item.monthly}/ {!addOn?.isYearPlanLength ? "mo" : "yr"}</p>
                        </div>



                    </label>

                ))
            }

            <div className='lg:flex flex lg:gap-0 gap-[120px] mt-10'>
                <button className='text-xl' onClick={handlePrevious}>Back</button>
                <button onClick={handleSubmit} className='bg-blue-800 text-white rounded lg:ms-96 ms-26 lg:mt-0 lg:p-3 p-2 lg:w-[25%] w-[105px]'>CONFIRM</button>
            </div>
        </div>


    )
}

export default Addon