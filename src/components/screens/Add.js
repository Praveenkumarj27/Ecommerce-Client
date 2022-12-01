import React, { useState } from "react";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNotebook } from "../../Redux/Actions/NotebooksActions";
import UploadImage from "../../Utils/UploadImage";

const Add = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !price || !descr) {
      return toast.warning("Fill all the fields!");
    }

    dispatch(addNotebook(title, price, descr, imgUrl, phoneNumber, navigate));
  };

  return (
    <div>
      <h3 className="text-center mt-4">Add New Notebooks</h3>

      <form className="shadow p-4 mt-4" onSubmit={submitHandler}>
        <div
          className="mb-3 text-center"
          onClick={() => setShowModal(!showModal)}
        >
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://5mod.ru/uploads/posts/2020-09/1601009611_1601009587.png"
            }
            alt="Take a photo"
            width="350"
            height="200"
            style={{ border: `4px dashed green` }}
            title="Click then take a photo"
          />
        </div>
        {showModal && (
          <UploadImage
            imageUpload={imageUpload}
            setImgUrl={setImgUrl}
            setImageUpload={setImageUpload}
            setShowModal={setShowModal}
          />
        )}
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Notebooks Name"
            // required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="title">Notebooks Model</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter price"
            min="1"
            // required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="price" className="form-label">
            Price
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="descr"
            placeholder="Enter Description"
            // required
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          />
          <label htmlFor="descr" className="form-label">
            Description
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="number"
            placeholder="Enter Your Phone Number"
            // required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="number" className="form-label">
            Phone Number
          </label>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Add Notebooks
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
