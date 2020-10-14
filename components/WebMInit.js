import React, { useEffect } from 'react'
import { initGlobalWebMonetizationState } from 'react-web-monetization'

const WebMInit = () => {
  useEffect(() => {
    initGlobalWebMonetizationState()
  }, [])

  return null
}

export default WebMInit
