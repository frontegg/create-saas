import React, { useCallback, forwardRef, useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Box from '@material-ui/core/Box';
import { useStyles } from './styles';
import { PopoverProps } from './types';

export const PopupClick = forwardRef<HTMLElement, PopoverProps>((props, ref) => {
  const { trigger, content, anchorOrigin, transformOrigin, mountNode } = props;
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setOpen(false);
  }, []);

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleClick })}
      <Popover
        ref={ref}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        container={mountNode}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}>
        <Box className={classes.box}>{content}</Box>
      </Popover>
    </>
  );
});
