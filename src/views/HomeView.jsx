import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

export default function HomePage() {
  const userName = useSelector(authSelectors.getUsername);
  const isLooggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLooggedIn ? (
    <h1>
      Welcome, {userName}! Please <Link to="/contacts">add your contacts</Link>
    </h1>
  ) : (
    <h1>Welcome to Phonebook!👋</h1>
  );
}
