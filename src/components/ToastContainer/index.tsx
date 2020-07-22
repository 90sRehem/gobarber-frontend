import React from 'react'
import { useTransition } from 'react-spring'

import { Contanier } from './styles'
import Toast from './Toast'
import { ToastMessage} from '../../context/ToastContext'

interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesIthTRansitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  )
  return (
    <Contanier>
      {messagesIthTRansitions.map(({item, key, props}) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Contanier>
  )
}

export default ToastContainer;
