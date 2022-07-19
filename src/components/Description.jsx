import './Description.scss'
import marker from '../pngs/icons/marker.png'
import { Button } from 'react-bootstrap'

export default function Description() {
    return(
        <div className='Content--text'>

                <p className='Content--text_hello font-face-qk'>
                    About us
                </p>

                <h1 className='Content--text_title'>
                    World Best Travel Agency Company Since 2008.
                </h1>

                <p className='Content--text_main'>
                Continually productize compelling quality for packed with  elated productize compelling quality for packed in  with all elated Them Setting up to website and creating pages.
                </p>

                <ul className='Content--text-list' >
                    <li className='Content--text-element' style={{listStyle: `url(${marker})`}}>
                        <p className='Content--text_main-el'>We providing compe quality for packed with elated different.</p>
                    </li>
                    <li className='Content--text-element' style={{listStyle: `url(${marker})`}}>
                        <p className='Content--text_main-el'>We are one of compelling quality for packed with leading.</p>
                    </li>
                    <li className='Content--text-element' style={{listStyle: `url(${marker})`}}>
                        <p className='Content--text_main-el'>Learn how compelling quality for packed with  elated grow.</p>
                    </li>
                </ul>

                <div className='Content--facts'>

                    <div className='Content--facts-element'>
                        <h1>
                            20+
                        </h1>
                        <p>
                            Year
                        </p>
                        <p>
                            Experience
                        </p>
                    </div>

                    <div className='Content--facts-element'>
                        <h1>
                            250+
                        </h1>
                        <p>
                            Destination
                        </p>
                        <p>
                        Collaboratin
                        </p>
                    </div>

                    <div className='Content--facts-element'>
                        <h1>
                            170K+
                        </h1>
                        <p>
                            Happy
                        </p>
                        <p>
                            Customers
                        </p>
                    </div>

                </div>

                <Button variant="warning" className='mainBtn mrgtp50'>
                    Read More
                </Button>

            </div>
    )
}