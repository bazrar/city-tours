import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import './TourList.scss'
import {tourData} from '../../tourData'

export default class TourList extends Component {
    state = {
        tours: tourData
    }
    deleteTourHandler = (id) => {
        const {tours} = this.state
        const filter = tours.filter(tour => tour.id !== id)
        this.setState({tours: filter})

    }
        render() {
        const {tours} = this.state
        return (
         <section className='tourlist'>
           { tours.map(tour => {
                return(
                    <Tour key={tour.id}
                    tour= {tour}
                    clicked= {() => this.deleteTourHandler(tour.id)}
                    />
                )
            })}
         </section>
        )
    }
}
