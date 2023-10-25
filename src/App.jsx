import "@/assets/style/main.css";
import "@/assets/style/imports/funky.css";
import { Home } from "./pages/Home.tsx";
function App() {
  return (
    <main className="bg-white flex flex-col justify-center">
      <Home />
    </main>
  );
}
export default App;
