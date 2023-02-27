import React, { useState } from 'react'
import './App.css'
import OriginationFormContainer from './components/OriginationFormContainer'
import OriginationPage from './components/OriginationPage'
import SalaryForm from './components/SalaryForm'

function App() {
  const [state, setState] = useState(2)
  const mOrigStep = [
    {
      title: 'Register',
    },
    {
      title: 'Employee Detail',
    },
    {
      title: 'Employee Salary Detail',
    },
    {
      title: 'Next Step',
    },
  ]

  return (
    <div className="App">
      <OriginationFormContainer>
        <div style={{ fontSize: '24px' }}>{`Step ${state} - ${mOrigStep[state].title}`}</div>
        {state === 2 ? (
          <OriginationPage>
            <SalaryForm setState={setState} />
          </OriginationPage>
        ) : (
          <OriginationPage>TDA</OriginationPage>
        )}
      </OriginationFormContainer>
    </div>
  )
}

export default App
