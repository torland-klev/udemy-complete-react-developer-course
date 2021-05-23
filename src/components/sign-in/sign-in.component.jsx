import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  onLoginSuccess = () => {
    this.props.history.push('/')
  }

  render() {
    const { t } = this.props

    return (
      <div className='sign-in'>
        <h2>{t('text_have_account')}</h2>
        <span>{t('text_sign_in_email_password')}</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label={t('text_email')}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            label={t('text_password')}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>{t('text_sign_in')}</CustomButton>
            <CustomButton
              onClick={() => signInWithGoogle().then(this.onLoginSuccess)}
              isGoogleSignIn>
              {t('text_sign_in_with_google')}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default withTranslation()(withRouter(SignIn))
