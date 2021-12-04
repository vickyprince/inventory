import logo from './logo.svg';
import './App.css';
import DashBoard from './Components/Dashboard';
import Form from './Components/Form'

// ROUTING NEEDS TO BE ADDED SO THAT FOR EACH USER ACTION LIKE ADD, MODIFY, LIST CAN HAVE DIFFERENT ROUTINGS
// REDUX NEEDS TO BE ADDED TO GET THE DATA THROGHOUT THE APP
function App() {
  return (
    <div className="App">
      <DashBoard />
      <Form />
    </div>
  );
}

export default App;
