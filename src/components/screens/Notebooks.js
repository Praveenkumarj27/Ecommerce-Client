import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotebooks } from "../../Redux/Actions/NotebooksActions";
import { useParams } from "react-router-dom";
import Notebook from "./Notebook";
import Pagination from "../../Utils/Pagination";
import SearchInput from "../../Utils/SearchInput";

const Notebooks = () => {
  const dispatch = useDispatch();
  const { keyword, pagenumber } = useParams();

  const notebookS = useSelector((state) => state.notebooks);
  const { loading, notebooks, pages, page } = notebookS;

  useEffect(() => {
    dispatch(getAllNotebooks(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  return (
    <div className="container position-relative">
      <div className="row">
        <h1 className="mt-2 text-center col-lg-6 col-12">iPhones</h1>
        <SearchInput />
      </div>

      {/* <Link to="/card" className="position-absolute top-10 end-0">
        <div className="btn position-fixed rounded-pill">
          <i className="fa fa-shopping-cart fs-2"></i>
          <span className="position-absolute top-0 start-95 translate-middle badge rounded-pill bg-danger">
            {notebooksInfo?.count} count +
          </span>
        </div>
      </Link> */}

      <div className="content_notebook my-2">
        {!loading ? (
          notebooks?.map((item) => <Notebook item={item} />)
        ) : (
          <h1 className="loading">loading...</h1>
        )}
      </div>
      {/* Pagination */}
      <Pagination page={page} pages={pages} keyword={keyword ? keyword : ""} />
    </div>
  );
};

export default Notebooks;
