import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../Redux/Actions/OrdersActions";
import moment from "moment";
import { Link } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();

  const getOrderS = useSelector((state) => state.orders);
  const { loading, orders } = getOrderS;

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center text-muted">My Orders</h1>
      {orders?.length ? (
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-10">
            <>
              {!loading ? (
                orders?.map((item) => (
                  <div
                    className="card shadow-lg mb-4"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="card-header px-4 py-4">
                      <h5 className="text-muted text-center mb-0">
                        Thanks for your Order,{" "}
                        <span style={{ color: "#41e418" }}>
                          {item.user.userId.name}
                        </span>
                        !
                      </h5>
                    </div>
                    <div className="card-body p-4">
                      {/* {{#each notebooks}} */}
                      {item?.notebooks?.map((notebook) => (
                        <div className="card shadow-1 border mb-4">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-3">
                                <img
                                  src={notebook.notebook.img}
                                  className="img-fluid"
                                  alt="{{notebook.title}}"
                                />
                              </div>
                              <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                                <h3 className="text-muted mb-0">
                                  {notebook.notebook.title}
                                </h3>
                              </div>
                              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <h5 className="text-muted mb-0">
                                  Qty: {notebook.count}
                                </h5>
                              </div>
                              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <h3 className="text-muted mb-0">
                                  ${notebook.notebook.price}
                                </h3>
                              </div>
                              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <a href={`tel:${notebook.notebook.phone}`}>
                                  <button className="btn btn-outline-primary">
                                    {notebook.notebook.phone}
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* {{/each}} */}
                      <div className="d-flex justify-content-between">
                        <p className="text-muted mb-0">
                          Invoice Date : {moment(item?.createdAt).format("lll")}
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-footer border-0 px-4 py-5"
                      style={{
                        backgroundColor: "#00c3ff",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
                      <h3 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                        Total:
                        <span className="h2 mb-0 ms-2">${item.price}</span>
                      </h3>
                    </div>
                  </div>
                ))
              ) : (
                <h1>LOADING . . .</h1>
              )}
            </>
            {/* {{/each}} */}
          </div>
        </div>
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
                    <strong>Your have not Ordered anything!</strong>
                  </h3>
                  <h4>Order something to make me happy 😭</h4>
                  <a href="/card" className="btn btn-outline-success m-3">
                    ORDER CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {{else}} */}
      {/* {{/if}} */}
    </>
  );
};

export default Orders;
