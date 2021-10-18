import ReactModal from 'react-modal'

import { ModalComponentProps } from '../../types'

import { ReactModalStyle } from './styles'

export function Modal({ children, isOpen, setIsOpen }: ModalComponentProps) {
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={isOpen}
      ariaHideApp={false}
      style={ReactModalStyle}
    >
      {children}
    </ReactModal>
  )
}
