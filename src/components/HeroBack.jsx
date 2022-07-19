import './HeroBack.scss'
import background from '../pngs/BG.png'
import Header from './Header'
import Content from './Content'
import Booking from './Booking'
import Travel from "./Travel";
import Photos from './Photos'
import Main from './Main'

export default function HeroBack() {
    return (
            <div className='background' style={{
                backgroundImage: `linear-gradient(129.31deg, rgba(52, 139, 167, 0.8) 11.77%, rgba(0, 0, 0, 0) 76.11%), url(${background})`
            }}>
               <Header />
               <Content />
               <Booking />
               <Travel />
               <Main />
            </div>
            
    )
}