import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import UserLogin from '../components/UserLogin';

const User = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<UserLogin />} />
      </Routes>
    </Wrapper>
  );
}

export default User