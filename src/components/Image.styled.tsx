import styled from "styled-components";
import image from '../assets/img/image.jpg';

export const Image = styled.div `
  width: 280px;
  height: 170px;
  border-radius: 10px;
  background: url(${image}) lightgray 50% / cover no-repeat;
  margin-bottom: 20px;
`;