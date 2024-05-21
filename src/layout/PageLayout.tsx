import { Container } from "@mui/material";
import { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

interface PageLayoutProps {
  children: ReactNode;
}
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Container maxWidth={false}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default PageLayout;
