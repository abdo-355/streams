import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

const StreamList = ({ fetchStreams, streams, currentUserId, isSignedIn }) => {
  useEffect(() => {
    fetchStreams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const streamControls = (stream) => {
    if (currentUserId !== undefined && stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui black button">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderList = () => {
    return streams
      .filter((stream) => stream.userId === currentUserId)
      .map((stream) => (
        <div className="item" key={stream.id}>
          {streamControls(stream)}
          <i className="large middle aligned icon camera" />
          <Link to={`streams/${stream.id}`} className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </Link>
        </div>
      ));
  };

  const renderCreateButton = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {renderCreateButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.user.sub,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
