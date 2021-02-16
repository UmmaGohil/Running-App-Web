import React from 'react'
import Nav from '../components/Nav'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { Link, Router } from 'react-router-dom'

describe('App component', () => {
  it('routes to a new route', async () => {
    const newHistory = createMemoryHistory()

    history.push = jest.fn()

    const { getByText } = render(
      <Router history={newHistory}>
        <Link to="/hello">Click me</Link>
      </Router>
    )

    fireEvent.click(getByText('Click me'))

    expect(history.push).toHaveBeenCalledWith('/hello')
  })
  //to do: check for icons
  it('should have the css classes', () => {
    const newHistory = createMemoryHistory()

    history.push = jest.fn()
    const { container } = render(
      <Router history={newHistory}>
        <Nav />
      </Router>
    )
    expect(container.firstChild).toHaveClass(
      'z-20 xxl:ml-0 md:ml-10vh sm:ml-5vh'
    )
  })
})
