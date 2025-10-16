import './App.css'
import Greeting from './components/Greeting';
import Header from './components/Header';
import MembershipStatus from './components/Membership';
import TaskList from './TaskList';

function App() {
  return (
    <>
      <div>
        <i>Current date:</i>
        <Header />
        <Greeting/>
        <MembershipStatus isMember = {false} />
        <u>Follow these steps:</u>
        <TaskList />
      </div>
    </>
  );
};

export default App;
