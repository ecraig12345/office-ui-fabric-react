import * as React from 'react';
import { Rating, RatingSize } from 'office-ui-fabric-react/lib/Rating';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

// tslint:disable:jsx-no-lambda

export const RatingBasicExample: React.FunctionComponent = () => {
  const [smallStarRating, setSmallStarRating] = React.useState<number>(3);
  const [largeStarRating, setLargeStarRating] = React.useState<number>();
  const [tenStarRating, setTenStarRating] = React.useState<number>();
  // const [themedStarRating, setThemedStarRating] = React.useState<number>();
  // const [customIconStarRating, setCustomIconStarRating] = React.useState<number>(2.5);

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      Default Star Size and Count
      <Rating rating={smallStarRating} onChange={(ev, rating) => setSmallStarRating(rating!)} ariaLabelFormat="{0} of {1} stars selected" />
      Large Stars
      <Rating
        min={1}
        max={5}
        size={RatingSize.Large}
        rating={largeStarRating}
        onChange={(ev, rating) => setLargeStarRating(rating!)}
        ariaLabelFormat="{0} of {1} stars selected"
      />
      10 Small Stars
      <Rating
        min={1}
        max={10}
        rating={tenStarRating}
        onChange={(ev, rating) => setTenStarRating(rating!)}
        ariaLabelFormat="{0} of {1} stars selected"
      />
      Disabled:
      <Rating rating={3} disabled ariaLabelFormat="{0} of {1} stars selected" />
      Half star in readOnly mode:
      <Rating rating={2.5} readOnly ariaLabelFormat="{0} of {1} stars selected" />
    </Stack>
  );
};

// private _onLargeStarChange = (ev: React.FocusEvent<HTMLElement>, rating: number): void => {
//   this.setState({ largeStarRating: rating });
// };

// private _onSmallStarChange = (ev: React.FocusEvent<HTMLElement>, rating: number): void => {
//   this.setState({ smallStarRating: rating });
// };

// private _onTenStarChange = (ev: React.FocusEvent<HTMLElement>, rating: number): void => {
//   this.setState({ tenStarRating: rating });
// };

// private _onThemedStarChange = (ev: React.FocusEvent<HTMLElement>, rating: number): void => {
//   this.setState({ themedStarRating: rating });
// };

// private _onCustomIconStarChange = (ev: React.FocusEvent<HTMLElement>, rating: number): void => {
//   this.setState({ customIconStarRating: rating });
// };
