// nextjs layout
import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { NextPage } from 'next';
import { AppShell, Footer, Header, Navbar, NavLink, ScrollArea } from '@mantine/core';
import { HeaderTabs } from '@/components/Header';
import NextLink from "next/link";
import { BoundingBox, Gear, HouseLine } from 'phosphor-react';
import { useRouter } from 'next/router';

type NavMenu = {
    title: string;
    href: string;
    icon: ReactElement;
};

const MainLayout: FC<PropsWithChildren<{ menus?: NavMenu[]; }>> = ({ children, menus }) => {

    const router = useRouter();
    return (
        <AppShell
            fixed
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            header={<Header height="56">
                <HeaderTabs user={{ name: "rasyid", image: "" }} />
                </Header>}
            navbar={<Navbar width={{ base: 200 }} p="xs">
                <Navbar.Section>{""}</Navbar.Section>
                <Navbar.Section grow>
                    {
                        menus && menus.map((menu, index) => (
                            <NextLink href={menu.href} key={index} passHref>
                                <NavLink component='a' key={index} icon={menu.icon} label={menu.title} active={router.pathname === menu.href} />
                            </NextLink>
                        ))
                    }
                </Navbar.Section>

                <Navbar.Section>{""}</Navbar.Section>
            </Navbar>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
            footer={
                <Footer height={32} px="xs" py="1">
                    Copyright &copy; 2022, rasyidf
                </Footer>}
        >
            <ScrollArea>
                {children}
            </ScrollArea>
        </AppShell>
    );
};

function getMainLayout(page: ReactElement) {
    return <MainLayout menus={[
        { title: "Home", href: "/", icon: <HouseLine /> },
        { title: "Sample", href: "/sample", icon: <BoundingBox /> },
        { title: "Settings", href: "/settings", icon: <Gear /> },
    ]}>{page}</MainLayout>;
};
export default getMainLayout;