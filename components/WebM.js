import React from 'react'
import {
  useMonetizationState,
  useMonetizationCounter,
} from 'react-web-monetization'

const WebM = () => {
  const monetization = useMonetizationState()
  const counter = useMonetizationCounter()

  return (
    <div>
      <p>
        {monetization.state === 'stopped' && 'Stopped'}
        {monetization.state === 'pending' && 'Loading...'}
        {monetization.state === 'started' && 'Thanks for supporting our site!'}
        {!monetization.state && 'WebMonetization is not enabled 😞'}
      </p>
      <p>
        {(counter.totalAmount / 10 ** counter.assetScale).toFixed(
          counter.assetScale
        )}
        {counter.assetCode}
      </p>
    </div>
  )
}

export default WebM
