import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount, ReactWrapper } from 'enzyme';

import { ColorRectangle } from './ColorRectangle';
import { ColorRectangleBase, IColorRectangleState, _getNewColor } from './ColorRectangle.base';
import { IColorRectangleProps } from './ColorRectangle.types';
import { getColorFromString } from '../../../utilities/color/getColorFromString';
import { IColor } from '../../../utilities/color/interfaces';

describe('ColorRectangle', () => {
  let wrapper: ReactWrapper<IColorRectangleProps, IColorRectangleState, ColorRectangleBase> | undefined;
  let component: renderer.ReactTestRenderer | undefined;
  let colorRectangle: ColorRectangleBase | null = null;
  const colorRectRef = (ref: ColorRectangleBase | null) => {
    colorRectangle = ref;
  };
  /** Gets a fake ClientRect of size 100x100 */
  const getBoundingClientRect = (): ClientRect => ({
    left: 0,
    top: 0,
    right: 100,
    bottom: 100,
    width: 100,
    height: 100
  });
  const color1 = getColorFromString('#abcdef')!;
  const color2 = getColorFromString('#123456')!;
  const white = getColorFromString('#ffffff')!;
  const red = getColorFromString('#ff0000')!;
  const black = getColorFromString('#000000')!;

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = undefined;
    }

    if (component) {
      component.unmount();
      component = undefined;
    }
  });

  it('renders correctly', () => {
    component = renderer.create(<ColorRectangle defaultColor={color1} minSize={300} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('defaults to white', () => {
    wrapper = mount(<ColorRectangle componentRef={colorRectRef} />);
    const color = colorRectangle!.color;
    expect(color).toBeTruthy();
    expect(color!.hex).toEqual(white.hex);
  });

  it('respects color prop', () => {
    wrapper = mount(<ColorRectangle color={color1} onChange={jest.fn()} componentRef={colorRectRef} />);
    expect(colorRectangle!.color).toEqual(color1);

    wrapper.setProps({ color: color2 });
    expect(colorRectangle!.color).toEqual(color2);
  });

  it('respects defaultColor prop', () => {
    wrapper = mount(<ColorRectangle defaultColor={color1} componentRef={colorRectRef} />);
    expect(colorRectangle!.color).toEqual(color1);
  });

  it('ignores updates to defaultColor prop', () => {
    wrapper = mount(<ColorRectangle defaultColor={color1} componentRef={colorRectRef} />);
    wrapper.setProps({ defaultColor: color2 });
    expect(colorRectangle!.color).toEqual(color1);
  });

  it('respects color prop change', () => {
    const onChange = jest.fn();
    wrapper = mount(<ColorRectangle color={color1} onChange={onChange} componentRef={colorRectRef} />);

    wrapper.setProps({ color: color2 });
    expect(colorRectangle!.color.hex).toEqual(color2.hex);
    // shouldn't call onChange when the consumer updates the color prop
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('correctly calculates new color', () => {
    const fakeRoot = { getBoundingClientRect } as HTMLElement;
    // fake mouse move in top right => red
    const fakeEvent = { clientX: 100, clientY: 0 } as React.MouseEvent<HTMLElement>;

    expect(_getNewColor(fakeEvent, white, fakeRoot)).toEqual(red);
  });

  it('correctly calculates new color when mouse move is out of max bounds', () => {
    const fakeRoot = { getBoundingClientRect } as HTMLElement;
    // fake mouse move out of bounds to bottom right => black
    const fakeEvent = { clientX: 200, clientY: 200 } as React.MouseEvent<HTMLElement>;
    // by default, black has s=0, but in this case it will be s=100
    const newColor = {
      ...black,
      s: 100
    };

    expect(_getNewColor(fakeEvent, white, fakeRoot)).toEqual(newColor);
  });

  it('correctly calculates new color when mouse move is out of min bounds', () => {
    const fakeRoot = {
      getBoundingClientRect: (): ClientRect => ({
        left: 50,
        top: 50,
        right: 150,
        bottom: 150,
        width: 100,
        height: 100
      })
    } as HTMLElement;
    // fake mouse move out of bounds to top left => white
    const fakeEvent = { clientX: 0, clientY: 0 } as React.MouseEvent<HTMLElement>;

    expect(_getNewColor(fakeEvent, black, fakeRoot)).toEqual(white);
  });

  it('preserves hue when changing color to white', () => {
    const fakeRoot = { getBoundingClientRect } as HTMLElement;
    const fakeEvent = { clientX: 0, clientY: 0 } as React.MouseEvent<HTMLElement>;
    const prevColor = color1;
    const newColor = {
      ...white,
      h: prevColor.h
    };

    expect(_getNewColor(fakeEvent, prevColor, fakeRoot)).toEqual(newColor);
  });

  it('handles mouse events when uncontrolled', () => {
    const onChange = jest.fn();
    wrapper = mount(<ColorRectangle defaultColor={white} onChange={onChange} minSize={100} componentRef={colorRectRef} />);

    const rectangle = wrapper.find('.ms-ColorPicker-colorRect');
    const thumb = wrapper.find('.ms-ColorPicker-thumb');

    rectangle.getDOMNode().getBoundingClientRect = getBoundingClientRect;

    // click in top right => red
    thumb.simulate('mousedown', { type: 'mousedown', clientX: 100, clientY: 0, buttons: 1 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(colorRectangle!.color).toEqual(red);

    // move farther to right => ignored (keep previous)
    thumb.simulate('mousemove', { type: 'mousemove', clientX: 200, clientY: 0, buttons: 1 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(colorRectangle!.color).toEqual(red);

    // mouse up => keep color
    thumb.simulate('mouseup');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(colorRectangle!.color).toEqual(red);
  });

  it('handles mouse events when controlled', () => {
    let newColor: IColor | undefined;
    const onChange = jest.fn((ev: React.SyntheticEvent<HTMLElement>, color: IColor) => {
      newColor = color;
    });
    wrapper = mount(<ColorRectangle color={white} onChange={onChange} minSize={100} componentRef={colorRectRef} />);

    const rectangle = wrapper.find('.ms-ColorPicker-colorRect');
    const thumb = wrapper.find('.ms-ColorPicker-thumb');

    rectangle.getDOMNode().getBoundingClientRect = getBoundingClientRect;

    // For the controlled tests, it should call onChange but not update the displayed value
    // until props are updated.

    // click in top right => red
    thumb.simulate('mousedown', { type: 'mousedown', clientX: 100, clientY: 0, buttons: 1 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(newColor).toEqual(red);
    expect(colorRectangle!.color).toEqual(white);
    wrapper.setProps({ color: red });
    expect(colorRectangle!.color).toEqual(red);

    // move farther to right => ignored (keep previous)
    thumb.simulate('mousemove', { type: 'mousemove', clientX: 200, clientY: 0, buttons: 1 });
    expect(onChange).toHaveBeenCalledTimes(1);

    // mouse up => keep color
    thumb.simulate('mouseup');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
