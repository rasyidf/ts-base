import { useRouter } from "next/router";
import { useState } from 'react';
import {
  Container,
  Group,
  Menu,
  Tabs,
  Burger,
  TextInput,
  createStyles,
} from '@mantine/core';
import { ArchiveBox, BellSimple, MagnifyingGlass as Search, Gear as SettingIcon, ArrowLineLeft as LogoutIcon } from "phosphor-react";
import { useDisclosure } from '@mantine/hooks';
import { UserButton } from "./UserButton";


const useStyles = createStyles((theme) => ({
  header: {
    paddingBlock: "6px",
    height: 56,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
      }`,
  },


  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
}));

interface HeaderTabsProps {
  user: { name: string; image: string; };
}

export function HeaderTabs({ user }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);


  return (
    <div className={classes.header}>
      <Container>
        <Group position="apart">
          <ArchiveBox size={24} />
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <TextInput rightSection={<Search size={20} />} radius="md" placeholder="Search" />
          <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
          >
            <Menu.Target>
              <UserButton user={user} active={userMenuOpened} />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<BellSimple size={14} color={theme.colors.red[6]} weight="bold" />}>
                Notification
              </Menu.Item>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<SettingIcon size={14} weight="bold" />}>Account settings</Menu.Item>
              <Menu.Divider />
              <Menu.Item icon={<LogoutIcon size={14} weight="bold" />}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );

}