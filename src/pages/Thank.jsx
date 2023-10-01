import React from 'react'
import thank from '../assets/image/thank.svg'
import { handlePreviousStep } from '../redux/plan'
import { useDispatch, useSelector } from 'react-redux'
const Thank = () => {

  const store = useSelector(state => state.plan.planData)

  const dispatch = useDispatch()
  const handlePrevious =()=>{
    dispatch(handlePreviousStep())
  }
  return (
    <>
    <div className='text-center mt-20 lg:mt-40 text-[15px] font-bold'>
    <img className='mx-auto my-3' src={thank} alt="" />
    <p className='my-3'>Thank you!</p>
    <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
    <button onClick={handlePrevious}>Go Back</button>
    </>
  )
}

export default Thank