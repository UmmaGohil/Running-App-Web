import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import Buttons from './Buttons'

describe('App component', () => {
  beforeAll(() => {
    render(<Buttons />)
  })

  it('should have the right message in the dom', () => {
    const message = 'test'

    expect(screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
})
