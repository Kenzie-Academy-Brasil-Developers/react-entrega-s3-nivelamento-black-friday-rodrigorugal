import styled from "styled-components";

export const BoxCart = styled.div`
  background-color: lightsalmon;
  width: 300px;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  right: 0;
`;

export const ListCartUl = styled.ul`
  background-color: lightcyan;
  height: 100%;
  width: 100%;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemListCart = styled.li`
  width: 95%;
  min-height: 45%;
  margin: 5px;

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
