import React from 'react'

function Banner({ selectedFile }) {
  return (
    <div className='banner'>
        {selectedFile ? (
            <img src={URL.createObjectURL(selectedFile)} alt="" />
        ) : (
            <p>Faça o upload de uma Imagem</p>
        )}
    </div>
  )
}

export default Banner