import React from "react";

import { useGlobalContext } from "./context";
import StoriesSkeleton from "./StoriesSkeleton";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  // if (isLoading) {
  //   return <div className="loading"></div>;
  // }

  return (
    <section className="stories">
      {!isLoading
        ? hits.map((story) => {
            const {
              objectID,
              title,
              num_comments,
              url,
              points,
              author,
            } = story;

            return (
              <article className="story" key={objectID}>
                <h4 className="title">{title}</h4>
                <p className="info">
                  {points} points by <span>{author} | </span>
                  {num_comments} comments
                </p>

                <div>
                  <a
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="read-link"
                  >
                    read more
                  </a>
                  <button
                    className="remove-btn"
                    onClick={() => removeStory(objectID)}
                  >
                    remove
                  </button>
                </div>
              </article>
            );
          })
        : hits.map((story) => {
            return <StoriesSkeleton key={story.objectID} />;
          })}
    </section>
  );
};

export default Stories;
