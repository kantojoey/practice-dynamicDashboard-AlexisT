import './App.css'
import Greeting from './components/Greeting';
import MembershipStatus from './components/Membership';
import TaskList from './TaskList';

function App() {
  return (
    <>
      <div>
        <Greeting/>
        <MembershipStatus isMember = {false} />
        <TaskList />
      </div>
    </>
  );
};

export default App;
