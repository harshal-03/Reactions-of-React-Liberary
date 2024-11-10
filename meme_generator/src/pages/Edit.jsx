import Button from "react-bootstrap/Button";
import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";
import Text from "../components/Text";

const EditPage = () => {
  const [params] = useSearchParams();

  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1);
  };

  const memeRef = createRef();

  return (
    <div>
      <div style={{width:"700px", border:"2px solid"}} ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} width="300px" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</Button>
    </div>
  );
};

export default EditPage;
