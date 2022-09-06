import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { deleteStream } from "../../actions";

import { fetchStream } from "../../actions";
import Modal from "../modal";

const StreamDelete = ({ fetchStream, deleteStream }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    fetchStream(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = () => {
    deleteStream(id);
    navigate("/");
  };

  const actions = (
    <>
      <button onClick={onDelete} className="ui button negative">
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete the stream with title: ${stream.title}`;
    }
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => navigate("/")}
    />
  );
};

export default connect(null, { fetchStream, deleteStream })(StreamDelete);
