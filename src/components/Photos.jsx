import './Photos.scss'
import photo1 from '../pngs/photo1.png'
import photo2 from '../pngs/photo2.png'

export default function Photos() {
    return (
        <div className='Photos'>
            <img src={photo1} className='photo-1'></img>
            <img src={photo2} className='photo-2'></img>
        </div>
    )
}