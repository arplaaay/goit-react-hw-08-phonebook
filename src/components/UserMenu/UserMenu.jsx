import { useDispatch, useSelector } from 'react-redux';
import { UserName, LogOutButton } from './UserMenu.styled';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);

  return (
    <div>
      <UserName>{userName}</UserName>
      <LogOutButton type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </LogOutButton>
    </div>
  );
}