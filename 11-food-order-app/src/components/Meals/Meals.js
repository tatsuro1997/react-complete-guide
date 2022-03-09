import { Fragment } from 'react';

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailavleMeals";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
};

export default Meals;
