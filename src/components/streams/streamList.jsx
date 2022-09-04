import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

const StreamList = ({ fetchStreams, streams }) => {
  useEffect(() => {
    fetchStreams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = () => {
    return streams.map((stream) => (
      <div className="item" key={stream.id}>
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
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
