import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { PageLoader } from "../Components/Navigation/page_loader";

export const AuthenticationGuard = ({ component: Component, ...rest  }) => {
  const wrappedComponent = withAuthenticationRequired(Component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <Component {...rest}/>;
};