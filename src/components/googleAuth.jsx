import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const GoogleAuth = () => {
  const [user, setUser] = useState({});
  const [showSignIn, setShowSignIn] = useState(true);

  const handleResponse = (res) => {
    console.log(jwt_decode(res.credential));
    setUser(jwt_decode(res.credential));
    setShowSignIn(false);
  };

  useEffect(() => {
    /* global google */
    if (showSignIn) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID,
        callback: handleResponse,
      });

      google.accounts.id.renderButton(document.querySelector("#signInDiv"), {
        locale: "en-US",
        type: "standard",
        shape: "rectangular",
        theme: "filled_black",
        text: "signin",
        size: "medium",
        logo_alignment: "left",
      });
    }
  }, [showSignIn]);

  const onSignOut = () => {
    setUser({});
    setShowSignIn(true);
  };

  return (
    <div className="item">
      {showSignIn && <div id="signInDiv"></div>}
      {!showSignIn && (
        <button className="tiny ui black button" onClick={onSignOut}>
          <i className="google icon" />
          Sign Out
        </button>
      )}
    </div>
  );
};

export default GoogleAuth;
