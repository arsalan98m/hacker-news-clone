import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { handlePage, isLoading, nbPages, page } = useGlobalContext();

  return (
    <div className="btn-container">
      <button onClick={() => handlePage("dec")} disabled={isLoading}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => handlePage("inc")} disabled={isLoading}>
        next
      </button>
    </div>
  );
};

export default Buttons;
