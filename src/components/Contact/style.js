import styled from "styled-components"

export const ContactWrapper = styled.section`
  padding: 100px 30px;
  background-color: #eef1f1;

  form {
    margin-top: 20px;
    position: relative;
    overflow: hidden;

    .input-area {
      margin-bottom: 40px;
      position: relative;

      &.button-area {
        text-align: center;
        margin-bottom: 0;
      }
    }

    input,
    textarea {
      height: 100%;
      font-size: 1.2rem;
      letter-spacing: 0.15rem;
      padding: 20px 20px 10px 20px;
      display: block;
      width: 100% !important;
      border: none;
      background-color: #fff;
      color: #f441a5;
      position: relative;
      box-sizing: border-box;
      outline: none;

      &:focus,
      &:valid {
        + .label-name {
          .content-name {
            transform: translateY(-115%);
            font-size: 0.7rem;
          }
          &::after {
            transform: translateX(0%);
          }
        }
      }
    }

    label {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      pointer-events: none;
      font-weight: 500;
      color: #f441a5;

      &::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -1px;
        height: 1px;
        color: #f441a5;

        width: 100%;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
    }

    .content-name {
      position: absolute;
      top: 16px;
      left: 20px;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.25rem;
      font-size: 1.3rem;
    }
  }
`
