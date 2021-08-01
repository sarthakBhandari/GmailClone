import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      const authInfo = await auth.signInWithPopup(provider);
      const { user } = authInfo;
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-gray-200">
      {/* login container */}
      <div className="flex flex-col justify-center -mt-20">
        <img
          className="object-contain h-60 w-80"
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png"
          alt=""
        />
        <Button
          onClick={signIn}
          className="-mt-12"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
