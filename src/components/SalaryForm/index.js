import React, { useState, useEffect } from 'react'
import { taxCalculator, superCalculator } from './utils'

const Container = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      {children}
    </div>
  )
}

const InputContainer = ({ children }) => {
  return <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>{children}</div>
}

const SalaryForm = ({ setState }) => {
  const [role, setRole] = useState()
  const [salary, setSalary] = useState()
  const [tax, setTax] = useState()
  const [mySuper, setMySuper] = useState()
  const [formData, setFormData] = useState()
  const submitForm = values => {
    setFormData(values)
    setState(3)
  }

  useEffect(() => {
    if (salary > 0) {
      setTax(taxCalculator(parseInt(salary)))
      setMySuper(superCalculator(parseInt(salary)))
    }
  }, [salary])
  return (
    <form onSubmit={submitForm}>
      <Container>
        <InputContainer>
          <label for="role">Role</label>
          <input
            type="text"
            placeholder="Your Position"
            value={role}
            onChange={e => {
              setRole(e.target.value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <label for="role">Salary</label>
          <input
            type="number"
            placeholder=""
            value={salary}
            onChange={e => {
              setSalary(e.target.value)
            }}
          />
        </InputContainer>
        {salary > 0 ? (
          <>
            <InputContainer>Estimate Tax : ${Number(tax).toFixed(2)}</InputContainer>
            <InputContainer>Estimate Super : ${Number(mySuper).toFixed(2)}</InputContainer>
          </>
        ) : null}
        <button type="submit"> Next </button>
        {JSON.stringify(formData)}
      </Container>
    </form>
  )
}

export default SalaryForm
