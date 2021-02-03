import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';


const Nav = ({homeText}) => {
  const text = ["Home", "Add", "Edit", "View", "Route"]
  const icons = ["home", "visibility", "add_circle_outline", "create", "directions_run"]
  return (
    <>
    {text.map(a => (
      <div>
      <Link to="/">
        {icons.map(b => (
          <Icon style={{ fontSize: 50, color:'white'}} >{b}</Icon>
        ))}
        {homeText && a}
      </Link>
    </div>
    ))}
    </>
  )
}

export default Nav

/*
<div>
        <Link to="/">
          <HomeIcon style={{ fontSize: 50, color:'white'}} />
          {homeText && `Home`}
        </Link>
        
      </div>
      <div>
        <div>
          <Link to="/Add">
            <VisibilityIcon style={{ fontSize: 50, color:'white'}} />
            {homeText && `Add`}
          </Link>
        </div>
      </div>
      <div>
        <div>
          <Link to="/Edit">
            <AddCircleOutlineIcon style={{ fontSize: 50, color:'white'}} />
            {homeText && `Edit`}
          </Link>
        </div>
      </div>
      <div>
        <div>
          <Link to="/View">
            <CreateIcon style={{ fontSize: 50, color:'white'}} />
            {homeText && `View`}
          </Link>
        </div>
      </div>
      <div>
        <div>
          <Link to="/Route">
            <DirectionsRunIcon style={{ fontSize: 50, color:'white'}} />
            {homeText && `Route`}
          </Link>
        </div>
      </div>
 */