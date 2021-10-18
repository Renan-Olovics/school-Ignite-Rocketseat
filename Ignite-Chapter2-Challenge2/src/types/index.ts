import { ReactNode } from 'react'

export type ModalFunctionProps = {
  isOpen: boolean
  setIsOpen: () => void
}

export interface HeaderProps {
  openModal: () => void
}

export type ModalComponentProps = ModalFunctionProps & {
  children: ReactNode
}

export type ModalAddFoodProps = ModalFunctionProps & {
  handleAddFood: (data: formRefProps) => void
}

export type formRefProps = {
  description: string
  image: string
  name: string
  price: string
}

export type ModalEditFoodProps = ModalFunctionProps & {
  handleUpdateFood: (food: FoodItem) => void
  editingFood: FoodItem
}

export type FoodItem = {
  available: boolean
  description: string
  id: number
  image: string
  name: string
  price: string
}

export type FoodProps = {
  food: FoodItem
  handleDelete: (id: number) => void
  handleEditFood: (food: FoodItem) => void
}

export interface skdihjfbskdjn {
  foods: FoodItem[]
  editingFood: () => void
  modalOpen: boolean
  editModalOpen: boolean
}
