import * as React from "react";
import styled, { css, keyframes } from "styled-components";
import "react-icons/ai";

const slideUp = keyframes`
    from{
        transform: translateY(15rem);
        opacity: 0;
        visibility: visible;
    }
    to{
        transform: translateY(5rem);
        opacity: 1;
        visibility: visible;
    }
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 150rem;
  margin: 0 auto;
  padding: 3rem 5rem;
  background-color: rgba(255, 255, 255, 55%);
  border-radius: 2rem;
  transition: all 1s ease-in-out;
  opacity: 0;
  visibility: hidden;
  animation: ${(props: MessageProps) =>
    props.active
      ? css`
          ${slideUp} 1s ease .3s both
        `
      : ""};
  will-change: initial;

  & > p {
    font-size: 4rem;
    text-align: center;
  }
`;

type MessageProps = {
  message?: string;
  icon?: any;
  active?: boolean;
};

const NotFound = ({ message, icon, active }: MessageProps) => {
  const TheIcon = icon;
  return (
    <MessageWrapper active={active}>
      <TheIcon />
      <p>{message}</p>
    </MessageWrapper>
  );
};

export default NotFound;
