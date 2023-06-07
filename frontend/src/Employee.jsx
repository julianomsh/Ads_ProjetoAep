import React from 'react'
import {Link} from 'react-router-dom'

function Employee() {
  return (
   <div className='px-5 py-3'> 
      <div className='d-flex justify-content-center'>
        <h3>Employ List</h3>
      </div>
      <Link to='/create' className='btn btn-sucess'> Add Employe</Link>
   </div>
  )
}

export default Employee