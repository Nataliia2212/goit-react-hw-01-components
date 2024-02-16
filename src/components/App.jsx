import user from '../assets/user.json';
import data from '../assets/data.json';
import transactions from '../assets/transactions.json';
import friends from '../assets/friends.json';
import {Statistics} from './Statistics/Statistics';
import {Profile} from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import FriendListItem from './FriendListItem/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList> 
          <FriendListItem friends={friends} /> 
      </FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
};
