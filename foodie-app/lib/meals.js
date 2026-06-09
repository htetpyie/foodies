import sql from 'better-sqlite3';

const db = sql('meals.db');
export async function getMeals(){
    // throw new Exception("Error Occurred.");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return db.prepare('Select * from meals').all();
}

export function getMeal(slug){
    return db.prepare('Select * from Meals where slug =?').get(slug);
}