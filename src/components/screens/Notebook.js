import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCard } from "../../Redux/Actions/CardsActions";
import NotebookEdit from "./NotebookEdit";

const Notebook = (props) => {
  const { item } = props;
  const [showEditModal, setShowEditModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className="card shadow" key={item._id}>
      <img className="card-img-top" src={item.img} alt={item.title} />
      <div className="card-body">
        <h1 className="card-title"> {item.title} </h1>
        <p className="card-text"> {item.descr} </p>
        <h2>$ {item.price} </h2>
      </div>
      <div className="card-body">
        <hr />
        <div className="btn-group d-flex justify-content-between align-items-center">
          <Link
            to={`/notebook/${item._id}`}
            className="btn btn-outline-warning"
          >
            Detail
          </Link>

          {user && user.msg && (
            <>
              {item?.userId?._id === user?.user?._id && (
                <>
                
                  <button
                    className="btn btn-outline-info"
                    onClick={() => setShowEditModal(!showEditModal)}
                  >
                    Edit
                  </button>
                  {showEditModal && (
                    <NotebookEdit
                      notebook={item}
                      setShowEditModal={setShowEditModal}
                      showEditModal={showEditModal}
                    />
                  )}
                </>
              )}
              {item?.userId?._id !== user?.user?._id && (
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={() => dispatch(addCard(item._id, navigate))}
                >
                  Buy
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notebook;
