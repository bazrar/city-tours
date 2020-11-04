import React from 'react'
import './Tour.scss'

class Tour extends React.Component {
    render() {
        const {id, city, name, img, info} = this.props.tour
       return (
            <article className='tour'>
                <div className="img-container">
                    <img
                    src={img} 
                    alt='city' />
                     <span className='close-btn'><i className='fas fa-window-close'></i></span>
p</div>
                    <div className="tour-info">

                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        {info} 
                        <span><i className='fas fa-caret-down'></i></span>
                    </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nihil?</p>
                
                    </div>
            </article>
           )
    }
}
export default Tour;