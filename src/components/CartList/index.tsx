import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartListPropos = {
  items: GameItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListPropos) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      Total <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList
