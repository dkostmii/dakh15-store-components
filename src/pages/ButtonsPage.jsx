import React from 'react'
import Button from '../components/Button'
import './ButtonsPage.sass'

function ButtonsPage() {
  const sampleText = "Click me!";

  return (
    <div class="page-buttons">
      <label className="primary">Primary button</label>
      <Button className="btn-primary">
          { sampleText }
      </Button>

      <label className="secondary">Secondary button</label>
      <Button className="btn-secondary">
          { sampleText }
      </Button>

      <label className="variant">Variant button</label>
      <Button className="btn-variant">
          { sampleText }
      </Button>

      <label className="ghost">Ghost button</label>
      <Button className="btn-ghost">
          { sampleText }
      </Button>
    </div>
  )
}

export default ButtonsPage
