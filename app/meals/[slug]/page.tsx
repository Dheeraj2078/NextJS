import { getMeal } from '@/lib/meals'
import classes from './page.module.css'
import Image from 'next/image';
import { notFound } from 'next/navigation';


export async function generateMetadata({params} : any){
    const meal : any = getMeal(params.slug);
    return {
        title: meal.title,
        summary: meal.summary
    }
}


export default function SingleMeal({params} : any){

    console.log(params)

    const meal : any = getMeal(params.slug);

    if(!meal){
        notFound()
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

    return(
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={"Meal title"} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                </div>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal.creator_email}`} > {meal.creator} </a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions
                    }}
                ></p>
            </main>
        </>
    )
}