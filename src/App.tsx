import { Footer } from "./components/Footer";
import { NavbarComponent } from "./components/Navbar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <main className="flex flex-col w-full h-full">
      <NavbarComponent />
      <AppRouter />
      <Footer />
    </main>
  );
}

export default App;
