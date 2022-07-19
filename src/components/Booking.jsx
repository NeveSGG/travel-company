import './Booking.scss'
import hotel from '../pngs/icons/hotel.png'
import flight from '../pngs/icons/flight.png'
import car from '../pngs/icons/car.png'
import ship from '../pngs/icons/ship.png'
import { Button } from 'react-bootstrap'
import Grid from './Grid'

export default function Booking() {
    return (
        <div className='Booking'>

            <div className='booking-buttons'>

                <Button variant="warning" className='hotel-button'>
                    <img src={hotel} className='button--img' alt=''></img>
                    <p className='button--text'>Hotel</p>
                </Button>

                <Button variant="light" className='flight-button'>
                    <img src={flight} className='button--img' alt=''></img>
                    <p className='button--text'>Flight</p>
                </Button>

                <Button variant="light" className='car-button'>
                    <img src={car} className='button--img' alt=''></img>
                    <p className='button--text'>Car</p>
                </Button>

                <Button variant="light" className='ship-button'>
                    <img src={ship} className='button--img' alt=''></img>
                    <p className='button--text'>Ship</p>
                </Button>

            </div>

            <div className='form-wrapper'>

                <form  action='' id="data"> 
                    <Grid />
                </form>

            </div>

        </div>
    )
}