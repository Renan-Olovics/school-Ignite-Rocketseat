import { FiPlusSquare } from 'react-icons/fi'

import { HeaderProps } from '../../types'
import Logo from '../../assets/logo.svg'

import { Container } from './styles'

export function Header({ openModal }: HeaderProps): JSX.Element {
  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={openModal}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
}
