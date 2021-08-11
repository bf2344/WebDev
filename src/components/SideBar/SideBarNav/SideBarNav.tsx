import React from 'react';
import clsx from 'clsx';
import { List, ListItem, Typography, Button } from '@material-ui/core';
import { PagesProps, MenuGroupProps } from '../../../interfaces/Props'
import useStyles from './useStyles'

interface Props {
    className?: string;
    onClose: Function;
    pages: PagesProps;
};

const SidebarNav = ({ pages, onClose, className, ...rest }: Props): JSX.Element => {
    const classes = useStyles();

    return (
        <List {...rest} className={clsx(classes.root, className)}>
            <ListItem className={classes.listItem}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    component="a"
                    target="blank"
                    href="https://material-ui.com/store/items/the-front-landing-page/"
                >
                    HIRE ME
                </Button>
            </ListItem>
        </List>
    );
};

export default SidebarNav;
