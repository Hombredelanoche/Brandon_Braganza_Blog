import config from "@/web/config"
import apiClient from "@/web/services/apiClient"
import jsonwebtoken from "jsonwebtoken"
import { createContext, useContext, useEffect, useState } from "react"

const SessionContext = createContext()

export const useSession = () => useContext(SessionContext)

export const SessionProvider = (props) => {
  const [session, setSession] = useState(null)
  const saveSessionToken = (jwt) => {
    localStorage.setItem(config.security.session.storageKey, jwt)

    const { payload } = jsonwebtoken.decode(jwt)

    setSession(payload)
  }
  const signOut = () => {
    localStorage.removeItem(config.security.session.storageKey)

    apiClient.delete("/sessions")

    setSession(null)
  }

  useEffect(() => {
    const jwt = localStorage.getItem(config.security.session.storageKey)

    if (!jwt) {
      return
    }

    const { payload } = jsonwebtoken.decode(jwt)

    setSession(payload)
  }, [])

  return (
    <SessionContext.Provider
      {...props}
      value={{
        session,
        saveSessionToken,
        signOut,
      }}
    />
  )
}
