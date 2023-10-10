import styled from "styled-components";

const DarkBtn = styled.button`
  width: 86px;
  border-radius: 5px;
  background-color: #4E71FE;
  padding: 4px 20px 6px 20px;
  font-size: 10px;
  color: #fff;
  font-weight: 700;
  line-height: 20px;

  &:hover {
    background-color: #1537c1;
    color: #fff;
  }
`;


const LightBtn = styled(DarkBtn)`
  color: #4E71FE;
  background-color: #FFF;
  border: 2px solid #4E71FE;
`;

export { DarkBtn, LightBtn };