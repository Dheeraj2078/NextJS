import classes from './meals-grid.module.css'
import MealItem from './meals-items'

export default function MealGrid({meals} : any){
    return(
        <ul className={classes.meals}>
            {
                meals.map((meal : any) => (
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                ))
            }
        </ul>
    )
}