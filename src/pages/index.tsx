
import type { NextPageWithLayout } from './_app'
import { AppShell, ScrollArea, Navbar, Footer, Header, Container, Card } from "@mantine/core";
import { HeaderTabs } from "@/components/Header";
import getMainLayout from '../components/layouts/MainLayout';
// async import HeaderTabs from "@/components/Header"; 
const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <Card>
        <h1 className="text-2xl font-bold">Welcome to SSR Boilerplate</h1>
      </Card>
    </Container>
  );
};

Home.getLayout = getMainLayout;

export default Home;
