import UserCard from "./components/UserCard";
import "./App.css"
import Aman1 from "./assets/1.jpg"
import Aman2 from "./assets/2.jpg"
import Aman3 from "./assets/3.jpg"

function App() {
  return (
    <div className="container">
      <UserCard name="Aman Sah" desc="desc1" image={Aman1} style={{"border-radius":"10px"}}/>
      <UserCard name="Rudraksh Sah" desc="desc2" image={Aman2} style={{"border-radius":"10px"}}/>
      <UserCard name="Aakash Sah" desc="desc3" image={Aman3} style={{"border-radius":"10px"}}/>
    </div>
  );
}

export default App;
