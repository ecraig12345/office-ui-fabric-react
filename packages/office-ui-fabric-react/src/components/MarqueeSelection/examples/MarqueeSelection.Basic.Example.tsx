import * as React from 'react';

import { css, createArray } from 'office-ui-fabric-react/lib/Utilities';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { MarqueeSelection, Selection, IObjectWithKey } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { mergeStyleSets, getTheme } from 'office-ui-fabric-react/lib/Styling';

interface IPhoto extends IObjectWithKey {
  url: string;
  width: number;
  height: number;
}

const theme = getTheme();
const classNames = mergeStyleSets({
  photoList: {
    display: 'inline-block',
    border: '1px solid ' + theme.palette.neutralTertiary,
    margin: 0,
    padding: 10,
    overflow: 'hidden',
    userSelect: 'none'
  },
  photoCell: {
    position: 'relative',
    display: 'inline-block',
    margin: 2,
    boxSizing: 'border-box',
    background: theme.palette.neutralLighter,
    lineHeight: '100px',
    verticalAlign: 'middle',
    textAlign: 'center',
    selectors: {
      '&.is-selected': {
        background: theme.palette.themeLighter,
        selectors: {
          ':after': {
            content: "''",
            position: 'absolute',
            right: 0,
            left: 0,
            top: 0,
            bottom: 0,
            border: '1px solid ' + theme.palette.themePrimary
          }
        }
      }
    }
  }
});

const PHOTOS: IPhoto[] = createArray(250, (index: number) => {
  const randomWidth = 50 + Math.floor(Math.random() * 150);

  return {
    key: index,
    url: `http://placehold.it/${randomWidth}x100`,
    width: randomWidth,
    height: 100
  };
});

export interface IMarqueeSelectionBasicExampleState {
  isMarqueeEnabled: boolean;
}

export class MarqueeSelectionBasicExample extends React.Component<{}, IMarqueeSelectionBasicExampleState> {
  private _selection: Selection;
  private _isMounted: boolean;

  constructor(props: {}) {
    super(props);

    this.state = {
      isMarqueeEnabled: true
    };

    this._selection = new Selection({
      onSelectionChanged: () => {
        if (this._isMounted) {
          this.forceUpdate();
        }
      }
    });

    this._selection.setItems(PHOTOS);
  }

  public componentDidMount(): void {
    this._isMounted = true;
  }

  public render(): JSX.Element {
    return (
      <MarqueeSelection selection={this._selection} isEnabled={this.state.isMarqueeEnabled}>
        <Toggle
          styles={{ root: { margin: '10px 0' } }}
          label="Enable marquee"
          inlineLabel
          defaultChecked={true}
          onChange={this._onChange}
        />
        <p>Drag a rectangle around the items below to select them:</p>
        <ul className={classNames.photoList}>
          {PHOTOS.map((photo, index) => (
            <div
              key={index}
              className={css(classNames.photoCell, this._selection.isIndexSelected(index) && 'is-selected')}
              data-is-focusable={true}
              data-selection-index={index}
              onClick={this._log('clicked')}
              style={{ width: photo.width, height: photo.height }}
            >
              {index}
            </div>
          ))}
        </ul>
      </MarqueeSelection>
    );
  }

  private _log(text: string): () => void {
    return (): void => {
      console.log(text);
    };
  }

  private _onChange = (ev: React.FormEvent<HTMLElement | HTMLInputElement>, isMarqueeEnabled: boolean | undefined): void => {
    this.setState({ isMarqueeEnabled: isMarqueeEnabled! });
  };
}
