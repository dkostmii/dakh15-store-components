import React from 'react'
import Button from '../components/Button'
import './ButtonsPage.sass'

function ButtonsPage() {
    const sampleText = 'Click me!'

    return (
        <div className="page-buttons">
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

            <label className="circle">Circle button</label>
            <Button className="btn-circle">
                { '?' }
            </Button>
        </div>
    )
}

export default ButtonsPage
