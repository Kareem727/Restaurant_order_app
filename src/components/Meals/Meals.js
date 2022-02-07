import { Fragment } from "react/cjs/react.production.min";
import MealsAvailable from "./MealsAvailable";
import SammaryM from "./SammaryMeals";


const Meals = () =>{
return(
    <Fragment>
        <SammaryM/>
        <MealsAvailable/>
    </Fragment>
);
}


export default Meals;