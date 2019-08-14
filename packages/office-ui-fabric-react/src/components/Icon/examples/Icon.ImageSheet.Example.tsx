import * as React from 'react';
import { Icon, IconType } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import { TestImages } from 'office-ui-fabric-react/lib/common/TestImages';

const classNames = mergeStyleSets({
  image: {
    display: 'inline-block',
    position: 'relative'
  },
  one: {
    width: 48,
    height: 44,
    marginLeft: 27
  },
  oneImage: {
    left: -6,
    top: -4
  },
  check: {
    width: 35,
    height: 43,
    marginLeft: 55
  },
  checkImage: {
    left: -60,
    top: -5
  },
  lock: {
    width: 35,
    height: 42,
    marginLeft: 65
  },
  lockImage: {
    width: -109,
    top: -5
  }
});

export const IconImageSheetExample: React.FunctionComponent = () => {
  return (
    <div>
      <Icon
        iconType={IconType.image}
        className={classNames.one}
        imageProps={{
          src: TestImages.iconOne,
          className: css(classNames.image, classNames.oneImage)
        }}
      />
      <Icon
        iconType={IconType.image}
        className={classNames.check}
        imageProps={{
          src: TestImages.iconOne,
          className: css(classNames.image, classNames.checkImage)
        }}
      />
      <Icon
        iconType={IconType.image}
        className={classNames.lock}
        imageProps={{
          src: TestImages.iconOne,
          className: css(classNames.image, classNames.lockImage)
        }}
      />
    </div>
  );
};
