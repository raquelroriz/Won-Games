import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import React from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

//   AnchorHTMLAttributes<HTMLAnchorElement> ele pode ser um link
//   ButtonHTMLAttributes<HTMLButtonElement> ou ele pode ser um botão

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

// & extende os elementos utilizando o type

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {!!icon && icon} {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
