import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const StoriesSkeleton = () => {
  return (
    <article className="story">
      <Skeleton width={200} />
      <Skeleton width={300} />

      <div style={{ display: "flex" }}>
        <Skeleton width={50}></Skeleton>
        <Skeleton width={60} style={{ marginLeft: "0.30rem" }}></Skeleton>
      </div>
    </article>
  );
};

export default StoriesSkeleton;
