import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
      <main>
        <div>
          <h1 className='text-3xl font-bold underline'>FacuNotas</h1>
          <div>
              <button >
                <Link to='/register'>Comenzar HOY</Link>
              </button>
              <button>
                <Link to='/register'>Ya tengo una cuenta</Link>
              </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Welcome
