const getCall = async(endpoint) => {
  return await fetch(`http://localhost:3001/api/v1/${endpoint}`)
}

export { getCall }