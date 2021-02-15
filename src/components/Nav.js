import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'

const Nav = ({ homeText }) => {
  const text = ['Home', 'Add', 'Edit', 'View', 'Route']
  const icons = [
    'home',
    'add_circle_outline',
    'create',
    'visibility',
    'directions_run',
  ]
  return (
    <>
      {text.map((a, indx) =>
        homeText ? (
          <div className="z-20 xl:ml-40vh lg:ml-30vh md:ml-20vh sm:ml-10vh mb-5vh">
            <Link to={a}>
              <Icon
                style={{ fontSize: 50, color: 'white', marginRight: '1vw' }}
              >
                {icons[indx]}
              </Icon>
              {a}
            </Link>
          </div>
        ) : (
          <div className="z-20 xxl:ml-0 md:ml-10vh sm:ml-5vh">
            <Link to={a}>
              <Icon style={{ fontSize: 50, color: 'white' }}>
                {icons[indx]}
              </Icon>
            </Link>
          </div>
        )
      )}
    </>
  )
}

export default Nav
