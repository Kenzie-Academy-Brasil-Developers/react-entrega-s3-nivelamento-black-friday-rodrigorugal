import styled from "styled-components";

export const ItemList = styled.li`
  background-color: lightblue;
  width: 280px;
  height: 350px;
  padding: 25px;
  text-align: center;
  border: 1px solid black;
  cursor: grab;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-size: 24px;
    font-weight: 500;
    border-bottom: 2px solid black;
  }

  .value {
    font-style: italic;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
    background-color: lightgreen;
  }
  .value::before {
    content: " ";
    display: block;
  }
`;

export const ButtonAdd = styled.button`
  background-color: #ffa500;
  height: 30px;
  width: 120px;
  cursor: pointer;

  &:hover {
    background-color: #7c5205;
    color: #f3f1ee;
  }
`;
