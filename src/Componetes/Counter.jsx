import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handlaChang = (type) => {
    if (type === "Increment") {
      setCount(count + 1);
    } else if (type === "Derement") {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row p-4">
          <div className="col-md-8 text-center">
            <div className="card">
              <div
                className={`card-header bg-${
                  count ? "info" : count.Derement ? " danger" : "primary"
                }`}
              >
                <span>{count === 0 ? "Zero" : count}</span>
              </div>
              <div className="card-body">
                <br />
                <br />
                <button
                  onClick={() => handlaChang("Increment")}
                  className="mx-3 btn btn-success"
                >
                  +
                </button>
                <button
                  onClick={() => handlaChang(0)}
                  className="mx-3 btn btn-warning"
                >
                  Reset
                </button>
                <button
                  onClick={() => handlaChang("Derement")}
                  className="mx-3 btn btn-danger"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
