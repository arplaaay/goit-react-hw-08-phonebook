import authSelectors from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;