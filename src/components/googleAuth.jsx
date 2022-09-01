import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const handleResponse = (res) => {
    signIn(jwt_decode(res.credential));
  };

  useEffect(() => {
    /* global google */

    if (!isSignedIn) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);

  const onSignOut = () => {
    signOut();
  };

  return (
    <div className="item">
      {!isSignedIn && <div id="signInDiv"></div>}
      {isSignedIn && (
        <button className="tiny ui black button" onClick={onSignOut}>
          <i className="google icon" />
          Sign Out
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
