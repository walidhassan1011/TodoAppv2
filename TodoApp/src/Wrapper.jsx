import React from "react";

const Wrapper = (Component, idName) =>
  function HOC() {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",

          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flex: 1,

            padding: "4rem 2rem",
          }}
        >
          <Component />
        </div>
      </div>
    );
  };

export default Wrapper;
