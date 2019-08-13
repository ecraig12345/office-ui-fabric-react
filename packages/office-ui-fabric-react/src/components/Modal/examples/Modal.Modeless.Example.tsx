import * as React from 'react';
import { Modal, IDragOptions } from 'office-ui-fabric-react/lib/Modal';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { mergeStyleSets, getTheme, FontWeights } from 'office-ui-fabric-react/lib/Styling';

const theme = getTheme();
const classNames = mergeStyleSets({
  stickyContainer: {
    width: '80vw',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch'
  },
  header: [
    theme.fonts.xxLarge,
    {
      flex: '1 1 auto',
      background: theme.palette.themePrimary,
      color: theme.palette.white,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '0 28px',
      minHeight: 40
    }
  ],
  body: {
    flex: '4 4 auto',
    padding: '5px 28px',
    overflowY: 'hidden'
  }
});

export const ModalModelessExample: React.FunctionComponent = () => {
  // tslint:disable:jsx-no-lambda
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [isDraggable, setIsDraggable] = React.useState<boolean>(false);

  // Use getId() to ensure that the IDs are unique on the page.
  // (It's also okay to use plain strings without getId() and manually ensure uniqueness.)
  const titleId = React.useMemo(() => getId('title'), []);
  const subtitleId = React.useMemo(() => getId('subText'), []);
  const dragOptions: IDragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: ContextualMenu
  };

  return (
    <div>
      <Toggle label="Is draggable" inlineLabel onChange={() => setIsDraggable(!isDraggable)} checked={isDraggable} />
      <DefaultButton secondaryText="Opens the Sample Modal" onClick={() => setShowModal(true)} text="Open Modal" />
      <Modal
        titleAriaId={titleId}
        subtitleAriaId={subtitleId}
        isOpen={showModal}
        onDismiss={() => setShowModal(false)}
        isModeless={true}
        containerClassName={classNames.stickyContainer}
        dragOptions={isDraggable ? dragOptions : undefined}
      >
        <div className={classNames.header}>
          <span id={titleId}>Lorem Ipsum</span>
        </div>
        <div id={subtitleId} className={classNames.body}>
          <DefaultButton onClick={() => setShowModal(false)} text="Close" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo.
            Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum
            non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim
            porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis
            ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante.
            Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur.{' '}
          </p>
        </div>
      </Modal>
    </div>
  );
};
