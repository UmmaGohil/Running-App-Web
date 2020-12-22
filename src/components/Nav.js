import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import VisibilityIcon from '@material-ui/icons/Visibility'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import CreateIcon from '@material-ui/icons/Create'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'

const Nav = (props) => {
  return (
    <>
      <div>
        <Link to="/">
          <HomeIcon style={{ fontSize: 50 }} />
        </Link>
        {props.homeText && `Home`}
      </div>
      <div>
        <div>
          <Link to="/Add">
            <VisibilityIcon style={{ fontSize: 50 }} />
          </Link>
          {props.homeText && `Add`}
        </div>
      </div>
      <div>
        <div>
          <Link to="/Edit">
            <AddCircleOutlineIcon style={{ fontSize: 50 }} />
          </Link>
          {props.homeText && `Edit`}
        </div>
      </div>
      <div>
        <div>
          <Link to="/View">
            <CreateIcon style={{ fontSize: 50 }} />
          </Link>
          {props.homeText && `View`}
        </div>
      </div>
      <div>
        <div>
          <Link to="/Route">
            <DirectionsRunIcon style={{ fontSize: 50 }} />
          </Link>
          {props.homeText && `Route`}
        </div>
      </div>
    </>
  )
}

export default Nav
