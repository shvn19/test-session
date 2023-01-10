import axios from 'axios';
import styles from './login.module.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('#1 e.target = ', e.target[0].value);
    // fetch('http://localhost:5000/user/login', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   credentials: 'include',
    //   body: JSON.stringify({
    //     username: e.target[0].value,
    //     password: e.target[1].value,
    //   })
    // })
    // .then(res => {
    //   console.log('#2 sucess');
    // })
    // .catch(err => {
    //   alert('error login');
    // })

    axios({
      url: 'http://localhost:5000/user/login',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      withCredentials: true,
      // http
      data: {
        username: e.target[0].value,
        password: e.target[1].value,
      }
    })
    .then(res => {
      alert('#2 sucess');
    })
    .catch(err => {
      alert('error login');
    });
  }

  const handleSendTest = () => {
    axios({
      url: 'http://localhost:5000/test_use_session',
      withCredentials: true,
      method: 'GET',
    }).then(res => {
      alert(res.data.sessionId);
    })
  }


  const handleLogout = (e) => {
    console.log(e);
    console.log('logout ....')
    fetch('http://localhost:5000/user/logout', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('logged out');
    })
    .catch(err => {
      console.log('#4 err when logout: ', err);
    })
  }
  return (
    <div className={``}>
      <form method="post" onSubmit={handleSubmit} className={styles[`form-container`]}>
        <div className={styles[`input-container`]}>
          <label htmlFor='username'>Username</label>
          <input type={'text'} name={'username'} />
        </div>
        <div className={styles[`input-container`]}>
          <label htmlFor='username'>Password</label>
          <input type={'text'} name={'password'} />
        </div>
        <button type="submit" className={styles[`submit-button`]}>Submit</button>
        <button type='button' className={styles[`submit-button`]} onClick={handleLogout}>hello out</button>
        <button type='button' className={styles[`submit-button`]} onClick={handleSendTest}>Send Session</button>
      </form>
      
    </div>
  )
}

export default Login;