import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import Form from './Form'

describe('<Form />', () => {
  it('should render the basic fields', () => {
    render(<Form />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })
})
