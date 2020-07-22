import React from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { Contanier, Toast } from './styles'

const ToastContainer: React.FC = () => {
  return (
    <Contanier>
      <Toast hasDescription>
        <FiAlertCircle size={20}/>
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>

          <button type='button'>
            <FiXCircle size={18}/>
          </button>
        </div>
      </Toast>

      <Toast type='success' hasDescription={false}>
        <FiAlertCircle size={20}/>
        <div>
          <strong>Aconteceu um erro</strong>
          <p></p>

          <button type='button'>
            <FiXCircle size={18}/>
          </button>
        </div>
      </Toast>

      <Toast type='error'hasDescription>
        <FiAlertCircle size={20}/>
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>

          <button type='button'>
            <FiXCircle size={18}/>
          </button>
        </div>
      </Toast>
    </Contanier>
  )
}

export default ToastContainer;
