import Login from './Login.js';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>메인 페이지입니다.</h1>
      <Link to='/Login'></Link>
    </div>
  )
}

export default Main;