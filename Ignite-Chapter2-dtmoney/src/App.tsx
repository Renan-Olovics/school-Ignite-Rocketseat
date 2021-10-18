import { useState } from 'react'

import Modal from 'react-modal'

import { NewTransactionModal } from './components/NewTransactionModal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'

import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './contexts/TransactionsContext'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <GlobalStyle />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </TransactionsProvider>
    </>
  )
}
