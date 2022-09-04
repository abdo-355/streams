import { useEffect } from "react";
import { connect } from "react-redux";
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
          <button className="ui black button">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  const renderList = () => {
    return streams.map((stream) => (
      <div className="item" key={stream.id}>
        {streamControls(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
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
