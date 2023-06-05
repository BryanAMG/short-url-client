export const validateUrl = ({ url }) => {
  try {
    const response = new URL(url)
    return !!response
  } catch (error) {
    console.log({ error })
    return false
  }
}
