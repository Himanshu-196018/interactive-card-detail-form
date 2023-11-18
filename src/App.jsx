import Cards from "./components/Cards";
import CardsForm from "./components/CardsForm";
import { useStateContext } from "./contexts/ContextProvider";
import Completed from "./components/Completed";

const App = () => {
  const { completed } = useStateContext();
  return (
    <main>
      <Cards />
      {completed ? <Completed /> : <CardsForm />}
    </main>
  );
};

export default App;
