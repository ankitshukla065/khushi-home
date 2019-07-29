import React from "react";
import { Spinner } from "reactstrap";

export const Loader = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <Spinner />
    </div>
  );
};
