import React from 'react'

const Loader = () => {
  const loader = {
    border: '8px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '16px solid #3498db',
    width: '35px',
    height: '35px',
    animation: 'spin 2s linear infinite',
    margin: 'auto'
  }

  return <div style={loader}></div>
}

export default Loader
