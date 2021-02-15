import React from 'react'
import Nav from '../components/Nav'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Link } from 'react-router-dom'

describe('App component', () => {
  it('routes to a new route', async () => {
    const history = createMemoryHistory()

    history.push = jest.fn()

    const { getByText } = render(<Link to="/hello">Click me</Link>)

    fireEvent.click(getByText('Click me'))

    expect(history.push).toHaveBeenCalledWith('/hello')
  })
  //to do: check for icons
  it('should have the css classes', () => {
    const { container } = render(<Nav />)
    expect(container.firstChild).toHaveClass(
      'z-20 xl:ml-40vh lg:ml-30vh md:ml-20vh sm:ml-10vh mb-5vh'
    )
  })
  afterAll(cleanup)
})
