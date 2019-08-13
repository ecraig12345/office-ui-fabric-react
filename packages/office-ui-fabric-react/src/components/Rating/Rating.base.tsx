import * as React from 'react';
import {
  warnDeprecations,
  initializeComponentRef,
  classNamesFunction,
  css,
  format,
  getId,
  divProperties,
  getNativeProps
} from '../../Utilities';
import { IProcessedStyleSet } from '../../Styling';
import { Icon } from '../../Icon';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import { IRatingProps, RatingSize, IRatingStyleProps, IRatingStyles, IRating } from './Rating.types';

const getClassNames = classNamesFunction<IRatingStyleProps, IRatingStyles>();

interface IRatingStarProps extends React.AllHTMLAttributes<HTMLElement> {
  fillPercentage: number;
  disabled?: boolean;
  readOnly?: boolean;
  classNames: IProcessedStyleSet<IRatingStyles>;
  icon?: string;
}

export interface IRatingState {
  rating: number | null | undefined;
}

const RatingStar = (props: IRatingStarProps) => {
  const icon = props.icon || 'FavoriteStarFill';
  return (
    <div className={props.classNames.ratingStar} key={props.id}>
      <Icon className={props.classNames.ratingStarBack} iconName={icon} />
      {!props.disabled && (
        <Icon className={props.classNames.ratingStarFront} iconName={icon} style={{ width: props.fillPercentage + '%' }} />
      )}
    </div>
  );
};

export class RatingBase extends React.Component<IRatingProps, IRatingState> implements IRating {
  private _id: string;
  private _min: number;
  private _max: number;
  private _labelId: string;
  private _classNames: IProcessedStyleSet<IRatingStyles>;

  constructor(props: IRatingProps) {
    super(props);

    initializeComponentRef(this);

    warnDeprecations('Rating', props, { onChanged: 'onChange' });

    this._id = getId('Rating');
    this._labelId = getId('RatingLabel');

    const { min = props.allowZeroStars ? 0 : 1, max = 5 } = props;
    this._min = min;
    this._max = max;

    this.state = {
      rating: this._getInitialValue(props)
    };
  }

  public render(): JSX.Element {
    const {
      disabled,
      getAriaLabel,
      styles,
      readOnly,
      size,
      theme,
      icon = 'FavoriteStarFill',
      unselectedIcon = 'FavoriteStar'
    } = this.props;

    const stars = [];
    const starIds = [];
    const rating = this.rating;
    const divProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(this.props, divProperties);

    this._classNames = getClassNames(styles!, {
      disabled,
      readOnly,
      theme: theme!
    });

    for (let i = this._min; i <= this._max; i++) {
      if (i !== 0) {
        const fillPercentage = this._getFillingPercentage(i);
        const ratingStarProps: IRatingStarProps = {
          fillPercentage,
          disabled,
          classNames: this._classNames,
          icon: fillPercentage > 0 ? icon : unselectedIcon
        };

        starIds.push(this._getStarId(i - 1));

        stars.push(
          <button
            className={css(
              this._classNames.ratingButton,
              size === RatingSize.Large ? this._classNames.ratingStarIsLarge : this._classNames.ratingStarIsSmall
            )}
            id={starIds[i - 1]}
            key={i}
            {...(i === Math.ceil(rating) ? { 'data-is-current': true } : {})}
            onFocus={this._onFocus.bind(this, i)}
            onClick={this._onFocus.bind(this, i)} // For Safari & Firefox on OSX
            disabled={!!(disabled || readOnly)}
            role="presentation"
            type="button"
          >
            {this._getLabel(rating % 1 ? rating : i)}
            <RatingStar key={i + 'rating'} {...ratingStarProps} />
          </button>
        );
      }
    }

    const ariaLabel = getAriaLabel ? getAriaLabel(rating, this._max) : '';
    const rootSizeClass = size === RatingSize.Large ? this._classNames.rootIsLarge : this._classNames.rootIsSmall;

    return (
      <div
        className={css('ms-Rating-star', this._classNames.root, rootSizeClass)}
        aria-label={!readOnly ? ariaLabel : ''}
        id={this._id}
        {...divProps}
      >
        <FocusZone
          direction={FocusZoneDirection.horizontal}
          tabIndex={readOnly ? 0 : -1}
          className={css(this._classNames.ratingFocusZone, rootSizeClass)}
          data-is-focusable={!!readOnly}
          defaultActiveElement={rating ? starIds[Math.ceil(rating) - 1] && '#' + starIds[Math.ceil(rating) - 1] : undefined}
          aria-label={readOnly ? ariaLabel : ''}
        >
          {stars}
        </FocusZone>
      </div>
    );
  }

  public get rating(): number {
    const propsRating = this.props.rating;
    const stateRating = this.state.rating;
    if (propsRating !== undefined) {
      return this._getClampedRating(propsRating);
    }
    if (stateRating !== undefined && stateRating !== null) {
      return this._getClampedRating(stateRating);
    }
    return 0;
  }

  private _getStarId(index: number): string {
    return this._id + '-star-' + index;
  }

  private _onFocus(value: number, ev: React.FocusEvent<HTMLElement>): void {
    if (Math.ceil(this.state.rating!) !== value) {
      this.setState({
        rating: value
      });

      const { onChange, onChanged } = this.props;

      if (onChange) {
        onChange(ev, value);
      }

      if (onChanged) {
        onChanged(value);
      }
    }
  }

  private _getLabel(rating: number): JSX.Element {
    const text = this.props.ariaLabelFormat || '';

    return (
      <span id={`${this._labelId}-${rating}`} className={this._classNames.labelText}>
        {format(text, rating, this._max)}
      </span>
    );
  }

  private _getInitialValue(props: IRatingProps): number | undefined {
    if (props.rating === undefined) {
      return this._min;
    }

    if (props.rating === null) {
      return undefined;
    }

    return this._getClampedRating(props.rating);
  }

  private _getClampedRating(rating: number): number {
    return Math.min(Math.max(rating, this._min), this._max);
  }

  private _getFillingPercentage(starPosition: number): number {
    const rating = this.rating;
    const ceilValue = Math.ceil(rating!);
    let fillPercentage = 100;

    if (starPosition === rating) {
      fillPercentage = 100;
    } else if (starPosition === ceilValue) {
      fillPercentage = 100 * (rating! % 1);
    } else if (starPosition > ceilValue) {
      fillPercentage = 0;
    }
    return fillPercentage;
  }
}
