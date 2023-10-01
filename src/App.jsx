import { useSelector } from 'react-redux'
import './App.css'
import Steppers from './component/Steppers'
import Personalinfo from './pages/Personalinfo'
import Selectplan from './pages/Selectplan'
import Addon from './pages/Addon'
import Summary from './pages/Summary'
import Thank from './pages/Thank'

function App() {

  // here, we check our value inside store which is plan then inside it we hve planata i.e all our var to our step. the one we want is currentStep
  const currentIndex = useSelector(state => state.plan.planData.currentStep)

  return (
    <>
      <div className='container'>
        <Steppers currentIndex={currentIndex} />
        <div className='stepContainer'>
          {currentIndex === 0 &&
            (<Personalinfo />
            )}
          {currentIndex === 1 &&
            (<Selectplan />
            )}
          {currentIndex === 2 &&
            (<Addon />
            )}
          {currentIndex === 3 &&
            (<Summary />
            )}
            {currentIndex === 4 &&
              (<Thank />
              )}
        </div>
      </div>
    </>
  )
}

export default App
