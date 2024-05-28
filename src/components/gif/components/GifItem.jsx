import PropTypes from 'prop-types'
import { useEffect } from 'react'

export const GifItem = ({title, url, onClick}) => {
  console.log("1");
  useEffect(() => {
    
  })
  
  
  return (
    <div className="col-4">
      <div className="card" onClick={ () => { onClick(url)}}>
          <img src={ url } alt={title} className='card-img-top'/>
          <div className='card-body'>
            <p>{title}</p>
          </div>
      </div>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired, 
  url  : PropTypes.string.isRequired, 
}
