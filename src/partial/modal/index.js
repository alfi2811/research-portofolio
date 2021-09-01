import React from 'react'
import Alert from './Alert'
import Tnc from './Tnc'

const ModalCont = (props) => {
  return (
    <>
      <Alert {...props} />
      <Tnc {...props} />
    </>
  )
}

export default ModalCont