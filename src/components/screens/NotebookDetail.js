import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { notebookDetail } from "../../Redux/Actions/NotebooksActions";

const NotebookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getOneNotebookS = useSelector((state) => state.notebook);
  const { notebook } = getOneNotebookS;
  dispatch(notebookDetail(id));

  return (
    <div className="card mt-3 shadow">
      <div className="row g-0">
        <div className="col-md-7">
          <img
            src={notebook?.img}
            className="img-fluid rounded-start"
            alt={notebook?.title}
          />
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h1 className="card-title lh-lg">{notebook?.title}</h1>
            <b className="card-text">{notebook?.descr}</b>
            <h1 className="card-text">
              <b>$</b>
              <small className="text-muted">{notebook?.price}</small>
            </h1>
            <a href={`tel:${notebook?.phone}`}>
              <button className="btn btn-outline-primary">
                {notebook?.phone}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookDetail;
