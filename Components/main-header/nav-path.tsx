"use client"

import Link from "next/link"
import {  usePathname } from 'next/navigation';
import styles from './nav-path.module.css'


export default function NavPathLink({href, children} : {href: any, children : any} ){

    const path = usePathname();

    return(
        <Link href={href} className={(path.startsWith(href)) ? styles.active : undefined} >
            {children}
        </Link>
    )
}


