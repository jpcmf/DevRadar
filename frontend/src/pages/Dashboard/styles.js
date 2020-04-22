import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
`;

export const Sidebar = styled.aside`
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  width: 320px;

  strong {
    color: ${colors.black};
    display: block;
    font-size: 20px;
    margin-bottom: 30px;
    text-align: center;
  }

  form {
    .form-group {
      label {
        color: ${colors.grey};
        display: block;
        font-size: 14px;
        font-weight: bold;
      }

      input {
        color: ${colors.darkgray};
        border: 0;
        border-bottom: solid 1px ${colors.lightGrey};
        height: 32px;
        width: 100%;
      }

      span {
        color: ${colors.danger};
        display: block;
        font-size: 12px;
        font-weight: 400;
        margin-top: 5px;
      }

      + .form-group {
        margin-top: 20px;
      }
    }

    button {
      background-color: ${colors.brand};
      border-radius: 2px;
      border: 0;
      color: ${colors.white};
      cursor: pointer;
      font-weight: bold;
      margin-top: 30px;
      padding: 15px 20px;
      width: 100%;
      transition: background-color 300ms ease;

      &:hover {
        background-color: ${colors.secondary};
      }
    }
  }
`;

export const Main = styled.main`
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
`;
