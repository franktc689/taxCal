import React from 'react'

const OriginationFormContainer = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '70vw',
        border: '1px solid grey',
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem',
      }}
    >
      {children}
    </div>
  )
}

export default OriginationFormContainer
