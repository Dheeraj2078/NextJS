import LogoImg from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from './MainHeader.module.css'
import MainHeaderBackground from './MainHeaderBackground'
import NavPathLink from './nav-path'
 
export default function MainHeader(){

 
    return(
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href={"/"}>
                    <Image  src={LogoImg} alt="Food" priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                           <NavPathLink href={'/meals'} children={"Browse Meals"} />
                        </li>
                        <li>
                            <NavPathLink href={'/community'} children={"Foodie Community"} />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}