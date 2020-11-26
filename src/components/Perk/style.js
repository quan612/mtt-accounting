import styled from "styled-components"

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`
