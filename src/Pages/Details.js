import React from "react";
import { useSelector } from "react-redux";

function Details() {
  // Get item data from the store
  const item = useSelector((state) => state.posts.itemData);
  return (
    <div className="Details">
      <h2>Details</h2>
      <div className="container">
        <div className="image-container">
          <img
            src={`https://picsum.photos/200?random=${item.id}`}
            alt="item_img"
          />
        </div>
        <div className="info">
          <p>
            <span className="bold">User ID:</span> {item.id}
          </p>
          <p>
            <span className="bold">Title:</span> {item.title}
          </p>
          <p>
            <span className="bold">Body:</span> {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
