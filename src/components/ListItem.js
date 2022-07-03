import React, { useState } from "react";

export default function ListItem(props) {
  const [Finish, setFinish] = useState(false);
  // const [Finished, setFinished] = useState(0);
  const finishTask = () => {
    setFinish(true);
    // setFinished(Finished + 1);
  };

  return (
    <>
      {!Finish ? (
        <div className="d-flex flex-column p-5 my-3 rounded-pill bg-dark">
          <div className="text-primary text-center fw-bold fs-3">
            {props && props.content}
          </div>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => finishTask()}
          >
            Finished
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column p-5 my-3 rounded-pill bg-dark">
          <s className="text-danger text-center fw-semibold fs-3">
            {props && props.content}
          </s>
          <p className="text-success text-center fw-bold fs-4">Well done</p>
        </div>
      )}
    </>
  );
}
