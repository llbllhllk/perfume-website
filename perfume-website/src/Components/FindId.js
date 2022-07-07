import React, { useState } from 'react';
import styles from '../assets/css/FindId.module.css'

const FindId = ({ requestPost, findId, userData }) => {
  const [state, setState] = useState(
    {
      phoneNumber: '',
    }
  );

  const handleChangePhoneNumber = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value, 
      }
    );
  }

  const handleFindId = () => {
    const url = '/users/findid';
    requestPost(url, state);
    if(findId === true) {
      // 사용자의 아이디(userData.email)를 modal로 출력
      alert('사용자의 아이디는 {userData.email} 입니다.');
    } else {
      alert('일치하는 사용자의 정보가 없습니다.');
    }
  }

  return (
    <section className={styles.findId}>
      <h1 className={styles.srOnly}>아이디 찾기</h1>
      <div className={styles.container}>
        <label 
          htmlFor="phoneNumber"
          className={styles.label}
        >
            연락처
        </label>
        <input
          className={styles.input}
          id="phoneNumber"
          type="text" 
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleChangePhoneNumber}
        />
        <p className={styles.description}>
          회원가입 시 입력한 연락처를 입력해주십시오.
          <br/>
          인증을 통해 아이디(E-mail)를 찾을 수 있습니다.
        </p>
        <button 
          type="button"
          onClick={handleFindId}
          className={styles.button}
        >
          확인
        </button>
      </div>
    </section>
  );
}

export default FindId