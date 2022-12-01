import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center col-lg-6 col-12 my-2">
      <form onSubmit={submitHandler} className="input-group w-50 text-center">
        <input
          type="search"
          className="form-control rounded search"
          placeholder="Search by Name"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitHandler(e);
            }
          }}
        />
        <button type="submit" className="btn btn-outline-primary">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
