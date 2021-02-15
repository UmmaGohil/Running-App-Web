import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Buttons from './Buttons'

describe('App component', () => {
  it('should have the right message in the dom', () => {
    const { container } = render(<Buttons />)
    expect(container.firstChild).toHaveClass(
      'bg-white text-undefined-500 font-bold py-2 px-4 rounded-md mb-5vh items-center w-1/7'
    )
  })
  afterAll(cleanup)
})
