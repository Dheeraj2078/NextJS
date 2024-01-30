'use client'

export default function Error({error} : {error : any}){
    return <main className="error">
        <h1>An Error occured!</h1>
        <p> Failed to fetch Meal.</p>
    </main>
}