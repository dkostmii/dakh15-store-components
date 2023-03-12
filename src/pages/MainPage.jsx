import React from 'react'
import Button from '../components/Button'

function MainPage() {
  return (
    <div>
      <h1>Dakh.15 Store Components</h1>
      <p>This is the project cotaining React components for Dakh.15 store.</p>
      <Button className="btn-primary" href="/Buttons">See buttons</Button>
      <Button className="btn-secondary" href="/Icons">See icons</Button>
    </div>
  )
}

export default MainPage
