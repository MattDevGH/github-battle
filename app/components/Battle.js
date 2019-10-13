import React from 'react'
import { GiFaceToFace, GiCrossedSwords, GiLaurelCrown } from 'react-icons/gi'

function Instructions () {
  return (
    <div className='instructions-container'>
      <h1 className='center-text header-lg'>
        Instructions
      </h1>
      <ol className='container-sm grid center-text battle-instructions'>
        <li>
          <h3 className='header-sm'>Enter two GitHub users</h3>
          <GiFaceToFace className='bg-light' color='rgb(255, 191, 116)' size={140} />
        </li>
        <li>
          <h3 className='header-sm'>Battle</h3>
          <GiCrossedSwords className='bg-light' color='#727272' size={140}/>
        </li>
        <li>
          <h3 className='header-sm'>See who wins!</h3>
          <GiLaurelCrown className='bg-light' color='rgb(255, 215, 0)' size={140} />
        </li>
      </ol>
    </div>
  )
}

export default class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
      </React.Fragment>
    )
  }
}