import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

const intl = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function PizzaOfTheDay() {
  const { pizzaOfTheDay, isLoading } = usePizzaOfTheDay();

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="pizza-of-the-day">
      <h2>Pizza Of The Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            From: {intl.format(pizzaOfTheDay.sizes["S"])}
          </p>
          <img
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
            className="pizza-of-the-day-image"
          />
        </div>
      </div>
    </div>
  );
}
