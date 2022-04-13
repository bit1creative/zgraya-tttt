import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`;

const StyledUserPageLayout = styled.div`
  padding: 50px 75px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePageLayout = ({ children }: { children: any }) => {
  return (
    <StyledUserPageLayout>
      <GlobalStyle />
      {children}
    </StyledUserPageLayout>
  );
};

export default HomePageLayout;
