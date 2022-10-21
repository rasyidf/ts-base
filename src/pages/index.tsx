
import type { NextPageWithLayout } from './_app'
import { AppShell, ScrollArea, Navbar, Footer, Header, Container } from "@mantine/core";
import { HeaderTabs } from "@/components/Header";
import getMainLayout from './layouts/MainLayout';
// async import HeaderTabs from "@/components/Header"; 
const Home: NextPageWithLayout = () => {
  return (
    <Container>
      Hehehe
    </Container>
  );
};

Home.getLayout = getMainLayout;

export default Home;
