import './Grid.scss'
import { Button } from 'react-bootstrap'

export default function Grid() {
    return(
        <div className='grid'>

            <div className='form--input'>
                <p className='form--input-name'>
                    Your Destination
                </p>
                <input className='form--input-input' type='text' placeholder='Thailand'></input>
            </div>

            <div className='form--input'>
                <p className='form--input-name'>
                    Check In
                </p>
                <input className='form--input-input' type='text' placeholder='01-26-22'></input>
            </div>

            <div className='form--input'>
                <p className='form--input-name'>
                    Check Out
                </p>
                <input className='form--input-input' type='text' placeholder='01-30-22'></input>
            </div>

            <div className='form--input'>
                <p className='form--input-name'>
                                Child
                </p>
                <input className='form--input-input' type='number' placeholder='2'></input>
            </div>

            <div className='form--input'>
                <p className='form--input-name'>
                    Adult
                </p>
                <input className='form--input-input' type='number' placeholder='3'></input>
            </div>

            <div className='form--input'>
                <div className='form--input-button'>
                    <Button variant="warning" className='mainBtn' type="submit" form="data">Book Now</Button>
                </div>
            </div>

        </div>
    )
}