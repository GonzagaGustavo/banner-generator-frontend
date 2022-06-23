import React from 'react'
import { useParams } from 'react-router-dom'

function EditUser() {
const params = useParams()

  return (
    <div>{params.id}</div>
  )
}

export default EditUser