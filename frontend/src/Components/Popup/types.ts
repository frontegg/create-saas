import { PopoverProps as MaterialUIPopoverProps } from '@material-ui/core';

type PopupPosition = {
  vertical: 'top' | 'bottom' | 'center';
  horizontal: 'left' | 'right' | 'center';
};

type PopupAction = 'hover' | 'click' | 'focus';

export interface PopupProps {
  position?: PopupPosition;
  content: React.ReactNode;
  action: PopupAction;
  trigger: React.ReactElement;
  mountNode?: HTMLElement;
}

export type PopoverProps = Omit<PopupProps, 'vertical' | 'horizontal'> &
  Pick<MaterialUIPopoverProps, 'anchorOrigin'> &
  Pick<MaterialUIPopoverProps, 'transformOrigin'>;
