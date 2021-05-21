import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withTranslation } from 'react-i18next';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import LanguageSwitcher from '../language-switcher/language-switcher.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/fish.svg';
import './header.styles.scss';

const Header = ({ t, currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo-container__logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        {t('text_shop').toUpperCase()}
      </Link>
      <Link className='option' to='/contact'>
        {t('text_contact').toUpperCase()}
      </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>{t('text_sign_out').toUpperCase()}</div>
          :
          <Link className='option' to='/signin'>{t('text_sign_in').toUpperCase()}</Link>
      }
      <LanguageSwitcher />
      <CartIcon />
    </div>
    { hidden ? null :
      <CartDropdown />
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default withTranslation()(connect(mapStateToProps)(Header));