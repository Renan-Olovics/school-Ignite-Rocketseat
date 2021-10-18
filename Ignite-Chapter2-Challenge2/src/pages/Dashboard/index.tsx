import { useEffect, useState } from 'react'

import { ModalEditFood } from '../../components/ModalEditFood'
import { ModalAddFood } from '../../components/ModalAddFood'
import { Header } from '../../components/Header'
import { Food } from '../../components/Food'
import api from '../../services/api'

import { FoodItem, formRefProps } from '../../types'

import { FoodsContainer } from './styles'

export function Dashboard() {
  const [editingFood, setEditingFood] = useState<FoodItem>()
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [foods, setFoods] = useState<FoodItem[]>([])
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    async function getFoods() {
      const response = await api.get<FoodItem[]>('/foods')
      setFoods(response.data)
    }
    getFoods()
  }, [])

  async function handleAddFood(formFood: formRefProps) {
    try {
      const response = await api.post('/foods', {
        ...formFood,
        available: true,
      })

      setFoods([...foods, response.data])
    } catch (error) {
      console.log(error)
    }
  }

  async function handleUpdateFood(food: FoodItem) {
    try {
      console.log(food)
      const foodUpdated = await api.put(`/foods/${editingFood?.id}`, {
        ...editingFood,
        ...food,
      })

      const foodsUpdated = foods.map((f) => (f.id !== foodUpdated.data.id ? f : foodUpdated.data))

      setFoods(foodsUpdated)
      setEditModalOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteFood(id: number) {
    await api.delete(`/foods/${id}`)

    const foodsFiltered = foods.filter((food) => food.id !== id)

    setFoods(foodsFiltered)
  }

  function toggleModal() {
    setModalOpen(!modalOpen)
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen)
  }

  function handleEditFood(food: FoodItem) {
    setEditingFood(food)
    setEditModalOpen(true)
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood isOpen={modalOpen} setIsOpen={toggleModal} handleAddFood={handleAddFood} />
      {editingFood && (
        <ModalEditFood
          isOpen={editModalOpen}
          setIsOpen={toggleEditModal}
          editingFood={editingFood}
          handleUpdateFood={handleUpdateFood}
        />
      )}

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map((food) => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  )
}
