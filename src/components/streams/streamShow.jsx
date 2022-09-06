import { useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import flv from "flv.js";

import { fetchStream } from "../../actions";

let player;

const StreamShow = ({ fetchStream }) => {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const videoRef = useRef();

  const buildComponent = () => {
    if (!stream || player) {
      return;
    }
    player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    console.log("L");
    player.attachMediaElement(videoRef.current);
    player.load();
  };

  useEffect(() => {
    fetchStream(id);
    buildComponent();

    return () => {
      player.unload();
      player.detachMediaElement();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    buildComponent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stream]);

  if (!stream) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <video ref={videoRef} style={{ width: "100%" }} controls />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </>
    );
  }
};

export default connect(null, { fetchStream })(StreamShow);
