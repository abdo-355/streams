import { Routes, Route } from "react-router-dom";

import Header from "./header";
import StreamCreate from "./streams/streamCreate";
import StreamDelete from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import StreamShow from "./streams/streamShow";

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route path="/" exact element={<StreamList />} />
        <Route path="/streams/new" exact element={<StreamCreate />} />
        <Route path="/streams/edit" exact element={<StreamEdit />} />
        <Route path="/streams/delete" exact element={<StreamDelete />} />
        <Route path="/streams/show" exact element={<StreamShow />} />
      </Routes>
    </div>
  );
};

export default App;
