import { patternEmail } from './constans'

export const validateUrl = ({ url }) => {
  try {
    const response = new URL(url)
    return !!response
  } catch (error) {
    console.log({ error })
    return false
  }
}

export const validateEmail = ({ email }) => email.match(patternEmail) == null
