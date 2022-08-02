import React, { useState } from "react"

function Post(props) {
  let [Love, LoveChange] = useState(0);
    return (
      <div className="list">
      <h4> {props.title}  </h4>
        <p>{props.content}</p>
        <span onClick={() => {LoveChange(Love + 1)} }> ♥</span> {Love}
        <hr />
      </div>
    )
  }

export default Post;