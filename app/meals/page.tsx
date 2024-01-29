import MealGrid from '@/Components/Meals/meals-grid'
import classes from './page.module.css'
import Link from 'next/link'
import { getMeals } from '@/lib/meals'
import { log } from 'console';

export default async function  Meals(){

    const mealsData = await getMeals();
    log("m", mealsData)

    return(
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favourite recipe and cook it by yourself. It is easy and fun.</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share your favourite Recipe.
                    </Link>
                </p>
            </header>

            <main className={classes.main}>
                <MealGrid meals={mealsData} />
            </main>
        </>
    )
}