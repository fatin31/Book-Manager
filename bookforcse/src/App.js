import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App dark:dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
