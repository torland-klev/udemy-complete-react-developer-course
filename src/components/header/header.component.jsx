import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withTranslation } from 'react-i18next'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import LanguageSwitcher from '../language-switcher/language-switcher.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Logo,
} from './header.styles'

const Header = ({ t, currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>{t('text_shop').toUpperCase()}</OptionLink>
      <OptionLink to='/contact'>{t('text_contact').toUpperCase()}</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          {t('text_sign_out').toUpperCase()}
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>{t('text_sign_in').toUpperCase()}</OptionLink>
      )}
      <LanguageSwitcher />
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Header)
)
