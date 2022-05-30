import Container from "./Container";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
