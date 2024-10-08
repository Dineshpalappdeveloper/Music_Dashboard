import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="bg-gray-100">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
