import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}
describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    // verifica se o title está renderizado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // verifica se o developer está renderizado
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    // verifica se o img está renderizado
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // verifica se o price está renderizado
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} />)
    const price = screen.getByText('R$ 235,00')

    // preço não tenha line-through
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

    // preço tenha o background secundário
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais

    // preço tenha line-through (200)
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
