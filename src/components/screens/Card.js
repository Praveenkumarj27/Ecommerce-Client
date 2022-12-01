import React, { useEffect } from "react";
import {
  getCards,
  minusItem,
  plusItem,
  removeItem,
} from "../../Redux/Actions/CardsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postOrders } from "../../Redux/Actions/OrdersActions";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notebooks = useSelector((state) => state.cards);
  const { loading, cards } = notebooks;

  useEffect(() => {
    dispatch(getCards());
  }, []);
  return (
    <>
      <h1 className="text-center">Basket</h1>

      <div className="container">
        {cards?.notebooks?.length ? (
          <>
            {!loading ? (
              cards?.notebooks?.map((item) => (
                <div className="card rounded-3 mb-4 shadow">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={item.img}
                          className="img-fluid rounded-3"
                          alt={item.title}
                        />
                      </div>

                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <h1 className=" fw-normal mb-2">{item.title}</h1>
                      </div>

                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex justify-content-center">
                        <button
                          className="btn btn-link px-2"
                          onClick={() => dispatch(minusItem(item._id))}
                        >
                          <i className="fas fa-minus"></i>
                        </button>

                        <div>{item.count}</div>

                        <button
                          className="btn btn-link px-2"
                          onClick={() => dispatch(plusItem(item._id))}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>

                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h4 className="mb-0">${item.price}</h4>
                      </div>

                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <p
                          className="text-danger"
                          onClick={() => dispatch(removeItem(item._id))}
                        >
                          <i className="fas fa-trash fa-lg"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>LOADING . . .</h1>
            )}

            <Link to="/" className="btn btn-outline-success">
              CONTINUE BUY
            </Link>

            <div
              className="d-flex justify-content-between align-items-center card-footer border-0 px-4 py-5 my-2"
              style={{
                backgroundColor: "#0a029a",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <button
                type="submit"
                className="btn btn-outline-info"
                onClick={() => dispatch(postOrders(navigate))}
              >
                ORDER
              </button>
              <h3 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                Total:
                <span id="price" className="h2 mb-0 ms-2">
                  ${cards.price}
                </span>
              </h3>
            </div>
          </>
        ) : (
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow mt-4">
                <div className="card-body">
                  <div className="col-sm-12 text-center">
                    <img
                      src="https://i.imgur.com/dCdflKN.png"
                      width="130"
                      height="130"
                      className="img-fluid mb-4 m-3"
                    />
                    <h3>
                      <strong>Your Cart is Empty</strong>
                    </h3>
                    <h4>Add something to make me happy 😭</h4>
                    <Link to="/" className="btn btn-outline-primary m-3">
                      CONTINUE SHOPPING
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
