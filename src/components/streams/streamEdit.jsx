import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";

const StreamEdit = ({ fetchStream }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchStream(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stream = useSelector((state) => state.streams[id]);

  if (!stream) {
    return <h4>Loading...</h4>;
  } else {
    return <div>Stream Edit</div>;
  }
};

export default connect(null, { fetchStream })(StreamEdit);
