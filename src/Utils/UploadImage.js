import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const UploadImage = (props) => {
  const { setShowModal, setImageUpload, imageUpload, setImgUrl } = props;

  const upload = () => {
    if (imageUpload == null) {
      return toast.warning("Image must be input!");
    }
    const imageRef = ref(storage, `images/${imageUpload?.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      setShowModal(false);
      getDownloadURL(snapshot.ref).then((url) => {
        setImgUrl(url);
        setImageUpload(null);
        toast.success("Successully Uploaded!");
      });
    });
  };

  return (
    <>
      <div className="input-group">
        <input
          type="file"
          className="form-control  form-control-lg"
          placeholder="Enter Image"
          onChange={(e) => setImageUpload(e.target.files[0])}
          // required
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={upload}
        >
          UPLOAD
        </button>
      </div>
    </>
  );
};

export default UploadImage;
