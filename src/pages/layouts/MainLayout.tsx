// nextjs layout
import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { NextPage } from 'next';
import { AppShell, Footer, Header, Navbar, ScrollArea } from '@mantine/core';
import { HeaderTabs } from '@/components/Header';

const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <AppShell
            fixed
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            header={<Header height="56"><HeaderTabs user={{ name: "rasyid", image: "" }} /></Header>}
            navbar={<Navbar width={{ base: 200 }} p="xs">
                <Navbar.Section>First section</Navbar.Section>

                <Navbar.Section grow>Grow section</Navbar.Section>

                <Navbar.Section>Last section</Navbar.Section>
            </Navbar>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
            footer={
                <Footer height={32} px="xs" py="1">
                    Application footer
                </Footer>}
        >
            <ScrollArea>
                {children}
            </ScrollArea>
        </AppShell>
    );
};

function getMainLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
export default getMainLayout;