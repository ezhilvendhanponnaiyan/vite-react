import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';

const SignIn = () => {
  const clickHandler = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
  };
  return (
    <div className='btn-container'>
      <button className='btn-btn' onClick={clickHandler}>
        Google SignIn
      </button>
    </div>
  );
};
export default SignIn;
