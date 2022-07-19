import './Content.scss'
import { Button } from 'react-bootstrap'

export default function Description() {
    return(
        <div className='Description'>
            <h1>It’s a Big World Out There, Go Explore</h1>
            <p>Conveniently customize proactive web services for leveraged without continualliery aggregate fricctionle ou wellies richard.and very customize  continually.</p>
            <div className='description--buttons'>
                <Button variant="warning" className='mainBtn'>Get Exploration</Button>
                <Button variant="light" className='secondBtn'>Read More</Button>
            </div>
        </div>
    )
}