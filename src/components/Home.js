import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;{/*Redirect is just the same as useHistory but is useful in doing conditional rendering i.e Return  the redirect component if this. */}
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;
