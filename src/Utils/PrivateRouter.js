import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  return user && user?.msg;
};

const PrivateRouter = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
