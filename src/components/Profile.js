import React from "react";

import { TranslationContext } from "../contexts/translationContext";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Profile = () => {
  const translation = React.useContext(TranslationContext);
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <h1>{`${translation.greeting} ${currentUser.name}.`}</h1>
    </>
  );
};

export default Profile;
