const getCall = async(endpoint) => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/${endpoint}`)
    return await response.json()
  } catch (error) {
    console.log(error)
    return error
  }
}

export { getCall }