import React from 'react'

const OriginationPage = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid grey',
        borderRadius: '8px',
        margin: '1rem',
        padding: '1rem',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      {children}
    </div>
  )
}

export default OriginationPage
