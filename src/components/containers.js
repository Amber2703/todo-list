import styled from 'styled-components';

export const FullContainer = styled.div `
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
`;

export const ContainerNavigation = styled.div`
        margin: 24px auto;
        width: fit-content;
`;

export const List = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
`;
export const CardContainer = styled.div`
        display: flex;
        padding: 24px;
        border-bottom: 1px solid;

        @media screen and (min-width: 768px) and (max-width: 1023px) {
                padding: 24px 18px;
  }

  @media screen and (max-width: 767px) {
        padding: 24px 12px;
  }

  @media screen and (max-width: 375px) {
        padding: 24px 6px;
  }

        & > * {
                margin-right: 10px;
        }
`;