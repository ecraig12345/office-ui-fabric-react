import * as React from 'react';
import { Modal, IDragOptions } from 'office-ui-fabric-react/lib/Modal';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { mergeStyleSets, getTheme, FontWeights } from 'office-ui-fabric-react/lib/Styling';

const theme = getTheme();
const classNames = mergeStyleSets({
  container: {
    height: '80vh',
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

export const ModalBasicExample: React.FunctionComponent = () => {
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
        isBlocking={false}
        containerClassName={classNames.container}
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
          <p>
            Mauris at nunc eget lectus lobortis facilisis et eget magna. Vestibulum venenatis augue sapien, rhoncus faucibus magna semper
            eget. Proin rutrum libero sagittis sapien aliquet auctor. Suspendisse tristique a magna at facilisis. Duis rhoncus feugiat magna
            in rutrum. Suspendisse semper, dolor et vestibulum lacinia, nunc felis malesuada ex, nec hendrerit justo ex et massa. Quisque
            quis mollis nulla. Nam commodo est ornare, rhoncus odio eu, pharetra tellus. Nunc sed velit mi.{' '}
          </p>
          <p>
            Sed condimentum ultricies turpis convallis pharetra. Sed sagittis quam pharetra luctus porttitor. Cras vel consequat lectus. Sed
            nec fringilla urna, a aliquet libero. Aenean sed nisl purus. Vivamus vulputate felis et odio efficitur suscipit. Ut volutpat
            dictum lectus, ac rutrum massa accumsan at. Sed pharetra auctor finibus. In augue libero, commodo vitae nisi non, sagittis
            convallis ante. Phasellus malesuada eleifend mollis. Curabitur ultricies leo ac metus venenatis elementum.{' '}
          </p>
          <p>
            Aenean egestas quam ut erat commodo blandit. Mauris ante nisl, pellentesque sed venenatis nec, aliquet sit amet enim. Praesent
            vitae diam non diam aliquet tristique non ut arcu. Pellentesque et ultrices eros. Fusce diam metus, mattis eu luctus nec,
            facilisis vel erat. Nam a lacus quis tellus gravida euismod. Nulla sed sem eget tortor cursus interdum. Sed vehicula tristique
            ultricies. Aenean libero purus, mollis quis massa quis, eleifend dictum massa. Fusce eu sapien sit amet odio lacinia placerat.
            Mauris varius risus sed aliquet cursus. Aenean lectus magna, tincidunt sit amet sodales a, volutpat ac leo. Morbi nisl sapien,
            tincidunt sit amet mauris quis, sollicitudin auctor est.{' '}
          </p>
          <p>
            Nam id mi justo. Nam vehicula vulputate augue, ac pretium enim rutrum ultricies. Sed aliquet accumsan varius. Quisque ac auctor
            ligula. Fusce fringilla, odio et dignissim iaculis, est lacus ultrices risus, vitae condimentum enim urna eu nunc. In risus est,
            mattis non suscipit at, mattis ut ante. Maecenas consectetur urna vel erat maximus, non molestie massa consequat. Duis a feugiat
            nibh. Sed a hendrerit diam, a mattis est. In augue dolor, faucibus vel metus at, convallis rhoncus dui.
          </p>
        </div>
      </Modal>
    </div>
  );
};
