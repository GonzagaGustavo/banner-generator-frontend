import React from 'react'

function Main({ dados, e }) {
  return (
    <div className='main'>
        <h1>Dados</h1>
        <div className='infos'>
            {e ? (
                <>
                {dados.map((i) => (
                    <>
                        <div>
                        <h1>Produto: {i.name}</h1>
                        <h2>Preço: {i.price}</h2>
                        <p>Parcela: {i.p_mounth}</p>
                        <p>Valor da parcela: {i.p_value}</p>
                        </div>
                        <div>
                            <img src={i.img} alt="" />
                        </div>
                    </>
                ))}
                </>
            ) : (
                <>
                </>
            )}
        </div>
    </div>
  )
}

export default Main