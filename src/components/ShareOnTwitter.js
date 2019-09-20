import React from "react";

const Tweet = ({ location, title, twitterHandle }) => {
  const cleanTwitterHandle = twitterHandle.replace("@", "");
  const href = `https://twitter.com/intent/tweet?text=${title}&url=${
    location.href
  }&via=${cleanTwitterHandle}`;
  return (
    <>
      <a href={href}>Share on Twitter</a>
    </>
  );
};

export default Tweet;
