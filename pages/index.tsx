import type { NextPage } from 'next'
import Chat from '../components/chat/chat';
import CheckIn from '../components/check_in/checkin';
import CheckInButton from '../components/check_in/checkin_button';
import Custom from '../components/custom/custom';
import Initial from '../components/initial';
import Join from '../components/join/join';
import Roster from '../components/roster_management/roster';
import Stats from '../components/stats/stats';
import Summary from '../components/summary/summary';


const Home: NextPage = () => {
  return (
    <div className="space-y-16">
      <div id="Crosscheck">
        <Initial />
      </div>
      <div id="Summary">
        <Summary />
      </div>
      <div id="Roster">
        <Roster />
      </div>
      <div id="Attendance">
        <CheckIn />
      </div>
      <div id="Stats">
        <Stats />
      </div>
      <div id="Chat">
        <Chat />
      </div>
      <div id="Custom">
        <Custom />
      </div>
      <div id="Join">
        <Join />
      </div>
    </div>
  )
}

export default Home
