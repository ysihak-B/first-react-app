import React from 'react'

// we can set a default value to be provided
const UserContext = React.createContext('haile')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext