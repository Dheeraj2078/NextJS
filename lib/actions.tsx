'use server'

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals"
import { redirect } from "next/navigation"

function isInvalidText(text : any){
  return !text || text.trim() === '';
}

export default async function shareMeal(prevState : any, formData:any) { 
   
    const meal = {
      title : formData.get('title'),
      summary : formData.get('summary'),
      instructions : formData.get('instructions'),
      image: formData.get('image'),
      creator : formData.get('name'),
      creator_email : formData.get('email')
    }

    if(
      isInvalidText(meal.title) || 
      isInvalidText(meal.summary) || 
      isInvalidText(meal.instructions) || 
      isInvalidText(meal.creator) || 
      isInvalidText(meal.creator_email) || 
      !meal.creator_email.includes('@') ||
      !meal.image || meal.image.size === 0
    ){
      // throw new Error("Invalid Input")
      return {
        message:null
      }
    }

    await saveMeal(meal)
    revalidatePath("/meals")
    redirect('/meals')
  }
