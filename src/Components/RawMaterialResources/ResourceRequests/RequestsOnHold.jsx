import React from "react";
import TopResourceCards from "./TopResourceCards";
import HeadingOne from "../../UiComponents/HeadingOne";

const RequestsOnHold = () => {
  return (
    <div>
      <HeadingOne headText="Requestes On Hold" />
      <div className="mx-4 my-10 sm:mx-40 sm:my-20">
        <TopResourceCards />
      </div>
    </div>
  );
};

export default RequestsOnHold;
