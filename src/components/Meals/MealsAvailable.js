
import stylesss from './MealsAvailable.module.css';
import Card from '../UI/Card'
import MealItem from './MealsItem/MealsItem';
import { useEffect, useState } from 'react';
// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//   ];
const MealsAvailable = (props) =>{
 const [meals ,setMeals] =useState([]);
 const [loading, setIsloading] = useState(true);
 const [errorr ,setError] = useState('');
 useEffect(()=>{
  const fetchMeals = async() =>{
    const response = await fetch('https://restorant-sushi-default-rtdb.firebaseio.com/meals.json');
   
    if(!response.ok){
      throw new Error('Something went wrongg')
       
    }

    const responseData =  await response.json();
      
    let mealsData = [];
    for(const key in responseData){
      mealsData.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price
      });

    }
    setMeals(mealsData);
    setIsloading(false);
  };


    fetchMeals().catch((errorr) =>{
      setIsloading(false);
      setError(errorr.message);
    });
 
 },[]);
  
 if(loading){
   return(
     <p className={stylesss.mealsLoading} > Loading ....</p>
   );
 }
 
if(errorr){
  return(
    <section className={stylesss.mealsError}>
      <p>{errorr}</p>
    </section>
  );
}
 
   const MealsItem = meals.map(meal => 
   <MealItem
    key={meal.id} 
    id={meal.id}
     name={meal.name}
      description={meal.description}
       price={meal.price}/>);
    return(
        <section className={stylesss.meals}>
            <Card>
                <ul>
                {MealsItem}
            </ul>

            </Card>
        </section>
    );
}

export default MealsAvailable;