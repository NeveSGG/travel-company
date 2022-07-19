import './Header.scss'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Header() {
    
    const [classes, setClasses] = useState('menu-btn')
    const [menu, setMenu] = useState(false)

    const toggler = (value) => {
        return (value ? false : true)
    }

    function changeClasses() {
        setClasses((oldClass) => {
            let newClass=""
            if (oldClass === "menu-btn") {
                newClass = "menu-btn open"
                document.body.classList.add('disable-scroll')
            } else {
                newClass = "menu-btn"
                document.body.classList.remove('disable-scroll')
            }
            return newClass
        })
        setMenu((oldMenu) => toggler(oldMenu))
    }

    return(
        
        <div className= 'Header'>
            <div className='nav--wrapper'>
                <div className='header--logo'>
                        <h1 className='text'><a href="#">Explore</a></h1>
                    </div>

                <nav>
                    <ul className='header--nav'>
                        <li className=' header--nav_el'>
                            <p className='text'><a href='#'>Home</a></p>
                        </li>
                        <li className=' header--nav_el'>
                            <p className='text'><a href='#'>Tours</a></p>
                        </li>
                        <li className='header--nav_el'>
                            <p className='text'><a href='#'>Hotel</a></p>
                        </li>
                        <li className='header--nav_el'>
                            <p className='text'><a href='#'>Gallery</a></p>
                        </li>
                        <li className=' header--nav_el'>
                            <p className='text'><a href='#'>Pages</a></p>
                        </li>
                        <li className=' header--nav_el'>
                            <p className='text'><a href='#'>Blog</a></p>
                        </li>
                        <li className=' header--nav_el'>
                            <p className='text'><a href='#'>Contact</a></p>
                        </li>
                        <li className=' header--nav_el'>
                            <p className='text'><a href='#'>Login</a></p>
                        </li>
                        <li className='header--nav_el'>
                            <div className='mainBtn-wrapper'>
                                <Button variant="warning" className='mainBtn'>Sign Up</Button>
                            </div>
                        </li>
                    </ul>
                    <div onClick={changeClasses} className={classes}>
                        <div className="menu-btn__burger"></div>
                    </div>

                </nav>
            </div>

            <div className={ menu ? 'mobile--nav-wrapper sidebar--show blury' : 'mobile--nav-wrapper sidebar--hide' }>
                <nav className='mobile--nav'>
                    <ul className='Ul-mob'>
                        <li className='Li-mob header--nav_el'>
                            <p className='text'><a href='#'>Home</a></p>
                        </li>
                        <li className='Li-mob header--nav_el'>
                            <p className='text'><a href='#'>Tours</a></p>
                        </li>
                        <li className='Li-mob header--nav_el'>
                            <p className='text'><a href='#'>Hotel</a></p>
                        </li>
                        <li className='Li-mob header--nav_el'>
                            <p className='text'><a href='#'>Gallery</a></p>
                        </li>
                        <li className='Li-mob header--nav_el'>
                            <p className='text'><a href='#'>Pages</a></p>
                        </li>
                        <li className='Li-mob header--nav_el'>
                            <p className='text'><a href='#'>Blog</a></p>
                        </li>
                        <li className='Li-mob header--nav_el'>
                            <p className='text'><a href='#'>Contact</a></p>
                        </li>
                        <li className='Li-mob header--nav_el'>
                            <p className='text'><a href='#'>Login</a></p>
                        </li>
                        <li className='Li-mob header--nav_el'>
                            <div className='mainBtn-wrapper'>
                                <Button variant="warning" className='mainBtn'>Sign Up</Button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    
    )
}