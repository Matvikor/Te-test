import { useState } from "react";

const InteractiveBlock = ({ onMouseEnterCallback, children }) => {
  const [isActive, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
    onMouseEnterCallback();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={isActive ? "active" : ""}
    >
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <InteractiveBlock onMouseEnterCallback={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </InteractiveBlock>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <InteractiveBlock onMouseEnterCallback={mouseEnterCallbak}>
      <p>{content}</p>
    </InteractiveBlock>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  return (
    <InteractiveBlock onMouseEnterCallback={mouseEnterCallbak}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </InteractiveBlock>
  );
};

export default InteractiveBlock;