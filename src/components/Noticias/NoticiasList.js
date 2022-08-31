import React, { useEffect, useState } from 'react'

export default function NoticiasList({articles,setarticles}) {
  const [noticias, setNoticias] = useState([])
  useEffect(() => {
    console.log(articles);
    // fetch("https://62ffcbd734344b6431014f67.mockapi.io/store/api/usuarios").then(res => res.json().then(data => {
    //   console.log(data);
    // }))

    // fetch("https://countryapi.io/api/all",{
    //   headers : {
    //     'Authorization': 'Bearer 1OYBJWFy4BT8e43ugesMk86Qi52C7AU8OsKTjOMp'
    //   }
    // }).then(res=>res.json().then(data=>{
    //   console.log(data);
    // }))
  }, [])

  return (
    <div>NoticiasList
      {
        articles.map(article => (
          <div key={article.title}>
            Hola
          </div>
        ))
      }
    </div>
  )
}
