import { forwardRef } from 'react';
import {
  Avatar,
  UnstyledButton,
  Group,
  Text,
  createStyles
} from '@mantine/core';
import { CaretDown } from "phosphor-react";

const useStyles = createStyles((theme) => ({


  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    // padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },


  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
  },

}));

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  user: { name: string; image: string; email?: string; };   
  active?: boolean;
  onClick?: () => void;
};

export const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(({ user, active, ...rest }, ref) => {

  const { classes, cx } = useStyles();
  return (
    <UnstyledButton ref={ref}
      className={cx(classes.user, { [classes.userActive]: active })}
      {...rest}
    >
      <Group spacing={7} >
        <Avatar src={user.image} alt={user.name} radius="xl" size={43} />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500} sx={{ lineHeight: 1 }} mr={3}>
            {user.name}
          </Text>

          <Text color="dimmed" size="xs">
            {user.email}
          </Text>
        </div>
        <CaretDown size={12} weight="bold" />
      </Group>
    </UnstyledButton>);
});
UserButton.displayName = 'UserButton';
