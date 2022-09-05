import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./streamForm";

const StreamEdit = ({ fetchStream, editStream }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetchStream(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const stream = useSelector((state) => state.streams[id]);

  const onSubmit = (formValues) => {
    editStream(id, formValues);
    navigate("/");
  };

  if (!stream) {
    return <h4>Loading...</h4>;
  } else {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{
            title: stream.title,
            description: stream.description,
          }}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
};

export default connect(null, { fetchStream, editStream })(StreamEdit);
