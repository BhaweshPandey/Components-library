import logo from './logo.svg';
import './App.css';
import Card from './Components/Cardcomponent/Card';
import TextInput from './Components/TextInput/TextInput';
function App() {
  return (
    <div className="App">
      <Card />
      <TextInput label={"name :"} type={"text"} placeholder={"Name"} />
      <TextInput label={"Password :"} type={"Password"} placeholder={"Password"} />
    </div>
  );
}

export default App;
