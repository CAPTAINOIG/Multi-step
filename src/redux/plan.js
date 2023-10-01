import {createSlice} from '@reduxjs/toolkit'


const initialData =()=>   {
//  after setting d ifo in our reducer we will collect it and pass it along
const item = window.localStorage.getItem('subscription')
//** Parse stored json or if none return initialValue
return item ? JSON.parse(item) : {
        currentStep: 0,
        
        Name: '',
        Email: '',
        Phone: '',
        
        isYearPlanLength: '',
        planType: '',
        planAmount: 0,
        
        addOnTypes: [],
        addOnTotalAmount: 0
    }

}

export const slice = createSlice({
    name: 'gameplan',
    initialState: {
        planData:initialData()
    },
    // it work like usestate. for rendering and re-rendering purpose(REDUCERS)
    reducers: {
        handleNextStep: (state, action)=> {
            state.planData = {...state.planData, ...action.payload}
            state.planData.currentStep++
            localStorage.setItem("subscription", JSON.stringify(state.planData))
        },

        handlePlanLength: (state, action) =>{
            state.planData.planLength = action.payload 
        },

        handlePreviousStep: (state, action)=> {
            state.planData.currentStep--
        },

        // the state will b changing by one i.e the currentstep will change either increase or decreaes by 1
        handleChange: (state, action)=> {
            state.planData.currentStep = 1
        },

        // once u click confirm it will chage the step by one
        handleConfirm: (state, action)=> {
          state.planData.currentStep++  
        }
    }
})
export const  {handleNextStep, handlePlanLength, handlePreviousStep, handleChange, handleConfirm} = slice.actions

export default slice.reducer