// import logo from './logo.svg';
import './App.css';
import Greetings from './components/class';
import Follow from './components/Follow';
import Guten from './components/Guten';
import Hello from './components/hello';

// function App() {
//   return (
//     <div className="App">
//       <Hello></Hello>
//     </div>    
//   );
// }

// Functional Components
function App() {
  return (
    <div className="App">
      <Hello/>
      <Greetings/>
      <Guten name="Erlangga" />
      <Guten name="Jabriel" />
      <Guten name="Iqbal" />
      <Follow/>
      
      
      
    </div>    
  );
}

export default App;
