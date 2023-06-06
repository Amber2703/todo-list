import styled from "styled-components";

export const Form = styled.form``;

export const TextArea = styled.textarea`
  width: 500px;
  height: 200px;
  resize: none;
  box-shadow: 0 0 5px 0px grey;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 400px;
  }

  @media screen and (max-width: 767px) {
    width: 350px;
  }

  @media screen and (max-width: 375px) {
    width: 300px;
  }
`;
