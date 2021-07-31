import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Nasi Goreng',
    description: 'Nasi yang digoreng dengan campuran telur dan sosis',
    price: 25000,
  },
  {
    id: 'm2',
    name: 'Mie Bakso',
    description: 'Bakso Kuah yang dicampur dengan Mie',
    price: 20000,
  },
  {
    id: 'm3',
    name: 'Rawon Daging',
    description: 'Masakan nusantara yang berasal dari jawa timur',
    price: 30000,
  },
  {
    id: 'm4',
    name: 'Ayam Goreng',
    description: 'Masakan Ayam yang digoreng dengan bahan dasar rempah-rempah yang khas',
    price: 17000,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
