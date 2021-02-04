import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'

const Nav = ({ homeText }) => {
  const text = ['Home', 'Add', 'Edit', 'View', 'Route']
  const icons = [
    'home',
    'visibility',
    'add_circle_outline',
    'create',
    'directions_run',
  ]
  return (
    <>
      {text.map((a, indx) => (
        <div className="z-20">
          <Link to={a}>
            <Icon style={{ fontSize: 50, color: 'white' }}>{icons[indx]}</Icon>
            {homeText && a}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Nav
