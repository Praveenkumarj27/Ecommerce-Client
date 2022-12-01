import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  editNotebook,
  removeNotebook,
} from "../../Redux/Actions/NotebooksActions";
import UploadImage from "../../Utils/UploadImage";

const NotebookEdit = (props) => {
  const { notebook, setShowEditModal, showEditModal } = props;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const [imageUpload, setImageUpload] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(notebook.title);
    setPrice(notebook.price);
    setDescr(notebook.descr);
    setPhoneNumber(notebook.phone);
    setImgUrl(notebook.img);
  }, []);
  console.log(notebook);

  const handleChangeSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !descr) {
      return toast.warning("Fill all the fields!");
    }
    dispatch(
      editNotebook(
        title,
        price,
        descr,
        imgUrl,
        phoneNumber,
        notebook._id,
        setShowEditModal
      )
    );
  };

  const remove = () => {
    dispatch(removeNotebook(notebook._id, setShowEditModal));
  };
  return (
    <>
      // Modal
      <div
        className="modal bg-secondary"
        style={showEditModal ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Edit Notebook Modal</h3>
              <button
                className="btn-close"
                onClick={() => setShowEditModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <form className="shadow p-4 mt-4" onSubmit={handleChangeSubmit}>
                <div
                  className="mb-3 text-center"
                  onClick={() => setShowModal(!showModal)}
                >
                  <img
                    src={
                      imgUrl
                        ? imgUrl
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEBQSrBdC5UhDE28U285PHrmPUhBhuYFxAw&usqp=CAU"
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
                <div className="form-floating mb-3 mt-3">
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
                    Edit Notebook
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-body text-end">
              <button className="btn btn-danger mx-4" onClick={remove}>
                Remove Notebook
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowEditModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </>
  );
};

export default NotebookEdit;
