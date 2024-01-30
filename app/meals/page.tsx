import MealGrid from '@/Components/Meals/meals-grid'
import classes from './page.module.css'
import Link from 'next/link'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'


export const metadata = {
    title: 'All Meals',
    description: 'Browse.',
  };
  

async function FetchMeals() {
    const mealsData = await getMeals();
    return <MealGrid meals={mealsData} />;
}

export default  function  Meals(){


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
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <FetchMeals/>
                </Suspense>
            </main>
        </>
    )
}