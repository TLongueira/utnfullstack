import React, { useEffect, useState } from 'react'

export default function NoticiasList() {
  const [noticias, setNoticias] = useState([])
  useEffect(() => {
    
  }, [])

  return (
    <div>NoticiasList
      {
        noticias.map(noticia => (
          <div>
            Hola
          </div>
        ))
      }
    </div>
  )
}
