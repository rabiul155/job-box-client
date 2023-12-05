import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import { getUser, setUser, toggleLoading } from "./feature/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email));
        dispatch(toggleLoading());
      } else {
        dispatch(toggleLoading());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
