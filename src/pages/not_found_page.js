import React from "react";
import PageLayout from "../Components/Navigation/page_layout";

export const NotFoundPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Not Found
        </h1>
        <img src="./images/error.gif" alt="error-image"></img>
      </div>
    </PageLayout>
  );
};
export default NotFoundPage;