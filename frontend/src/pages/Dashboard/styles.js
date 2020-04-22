import styled from 'styled-components';

import colors from '~/styles/colors';

import { device } from '~/styles/device';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  @media ${device.laptop} {
    grid-template-columns: 320px auto;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 20px;

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
      transition: background-color 300ms ease;
      width: 100%;

      &:hover {
        background-color: ${colors.secondary};
      }
    }
  }
`;

export const Main = styled.main`
  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    @media ${device.laptopL} {
      grid-template-columns: repeat(2, 1fr);
    }

    li {
      background-color: ${colors.white};
      border-radius: 2px;
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
      padding: 20px;

      header {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          border-radius: 50%;
          height: 54px;
          width: 54px;
        }

        .user-info {
          margin-left: 10px;

          strong {
            display: block;
            color: ${colors.black};
          }

          span {
            font-size: 13px;
            color: ${colors.darkGrey};
            margin-top: 2px;
          }
        }
      }

      p {
        color: ${colors.black};
        font-size: 14px;
        line-height: 20px;
        margin: 10px 0;
      }

      a {
        color: ${colors.brand};
        font-size: 14px;
        text-decoration: none;
        transition: color 300ms ease;

        &:hover {
          color: ${colors.secondary};
        }
      }
    }
  }
`;
