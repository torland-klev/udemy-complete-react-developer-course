import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'

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
    const { emailSignInStart } = this.props
    const { email, password } = this.state

    emailSignInStart(email, password)
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  onLoginSuccess = () => {
    this.props.history.push('/')
  }

  render() {
    const { t, googleSignInStart } = this.props

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
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn>
              {t('text_sign_in_with_google')}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(withRouter(SignIn)))
