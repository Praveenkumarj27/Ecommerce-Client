import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getOrdered, updateProfile } from "../../Redux/Actions/UserActions";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const getOrdereD = useSelector((state) => state.ordered);
  const { ordered, loading } = getOrdereD;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirm) {
      toast.warning("Fill the all informations!");
      return;
    }
    if (password !== confirm) {
      toast.warning("Password should be similar!");
      return;
    }

    dispatch(
      updateProfile(
        name,
        email,
        password,
        confirm,
        userInfo.user?.email,
        navigate
      )
    );
  };

  useEffect(() => {
    setName(userInfo.user?.name);
    setEmail(userInfo.user?.email);
    dispatch(getOrdered());
  }, []);

  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  return (
    <div>
      <div className="row shadow rounded-3  mt-lg-5 mt-md-5 mb-3">
        <div className="col-10 offset-1">
          <h2 className="text-center mt-lg-3">Profile Settings</h2>
          <form className="p-4 mt-2" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-floating mb-3 mt-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Notebooks Name"
                  name="name"
                  //   required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="p-3" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="form-floating mb-3 mt-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                  name="email"
                  //   required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="p-3">
                  Email
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-floating mb-3 mt-3 col-md-6">
                <input
                  type="password"
                  className="form-control"
                  id="passord"
                  placeholder="Enter Password"
                  name="password"
                  //   required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="p-3" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="form-floating mb-3 mt-3 col-md-6">
                <input
                  type="password"
                  className="form-control"
                  id="confirm"
                  placeholder="Enter price"
                  name="confirm"
                  //   required
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
                <label htmlFor="confirm" className="p-3">
                  Confirm
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-outline-success">
                UPDATE PROFILE
              </button>
            </div>
          </form>
        </div>
        <div className="col-10 offset-1 mt-2" style={{ overflowX: "auto" }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Rasm</th>
                <th scope="col">Maxsulot Nomi</th>
                <th scope="col">Mijoz Ismi</th>
                <th scope="col">Maxsulot Soni</th>
                <th scope="col">Umumiy Hisob</th>
                <th scope="col">BUYURTMA QILINGAN VAQT</th>
              </tr>
            </thead>
            {loading && <h2>LOADING...</h2>}
            <tbody>
              {ordered &&
                ordered.map((item) => (
                  <tr>
                    <td scope="col">
                      <img
                        src={`${item.notebook.notebook.img}`}
                        alt={`${item.notebook.notebook.title}`}
                        width="80"
                        height="40"
                      />
                    </td>
                    <td scope="col">{item.notebook.notebook.title}</td>
                    <td scope="col">{item.orderBy.name}</td>
                    <td>
                      {item.notebook.count} x ${item.notebook.notebook.price} =
                    </td>
                    <td scope="col">
                      ${item.notebook.notebook.price * item.notebook.count}
                    </td>
                    <td>{moment(item.createdAt).format("LLLL")}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
