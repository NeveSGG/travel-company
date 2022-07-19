import './Main.scss'
import Photos from './Photos'
import Description from './Description'
import Serf from './Serf'

export default function Main() {
    return (
        <div className='Main'>
            <Description />
            <Photos />
            <Serf />
        </div>
    )
}