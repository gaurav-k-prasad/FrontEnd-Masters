import { useDebugValue, useEffect, useState } from "react";

export function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // useDebugValue to show in react developer menu
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id}` : "Loading...");

  useEffect(() => {
    fetch("/api/pizza-of-the-day")
      .then((res) => res.json())
      .then((res) => {
        setPizzaOfTheDay(res);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, pizzaOfTheDay };
}
