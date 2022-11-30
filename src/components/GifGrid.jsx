import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components';


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

  return (
    <>
        <h3>{ category }</h3>
        { isLoading ? <h3>Cargando...</h3> : <div className='card-grid'>
            {images.map( (image) =>{
                return <GifGridItem key={image.id} { ...image }/>
            })} 
        </div>}
        
        
    </>
  )
}

