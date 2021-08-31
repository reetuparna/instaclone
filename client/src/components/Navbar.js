import React, { useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  console.log(state);
  const renderList = () => {
    if (state) {
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/createPost">Create Post</Link></li>,
        <li><Link to="/subscribed">Subscribed Posts</Link></li>,
        <li>
          <button 
                    className="btn waves-effect wave"
                    onClick={()=>{
                      localStorage.clear();
                      dispatch({type:'CLEAR'});
                      history.push('/login');
                    }}>
                    Logout
                </button>
          </li>
      ];
    } else {
      return [
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">SignUp</Link></li>
      ];
    }
  }
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state?"/":"/login"} className="brand-logo">Instagram</Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
        );
      </div>
    </nav>
  )
}



export default NavBar;