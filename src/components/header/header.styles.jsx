import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as FishLogo } from '../../assets/fish.svg'

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  min-width: 720px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`
export const Logo = styled(FishLogo)`
  width: inherit;
  max-height: 70px;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: larger;
`

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`

export const OptionDiv = styled(Link)`
  ${OptionContainerStyles}
`
