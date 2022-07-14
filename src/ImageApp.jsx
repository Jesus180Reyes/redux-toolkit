import React from 'react'
import { useGetImagesQuery } from './store/slices/apis'

export const ImageApp = () => {

    const {data = [] , isLoading} = useGetImagesQuery();
  return (
    <>
    <h1>Images</h1>
    <h2>{isLoading ? 'Cargando': ''}</h2>
    <hr />
    <ul>
        {data.map(image => {
            return <li key={image.id}><img src={image.url}></img></li>
        })}
    </ul>
    </>
  )
}
