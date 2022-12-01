import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="row mt-5">
      <div className="col-sm-12">
        <div className="text-center">
          <div>
            <h1 className="text-center" style={{ fontSize: "80px" }}>
              404
            </h1>
          </div>

          <div>
            <h2>Adashganga o'xshaysiz</h2>

            <p>siz izlayotgan sahifa mavjud emas!</p>

            <Link to="/" className="btn btn-outline-success">
              Go to Notebooks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missing;
