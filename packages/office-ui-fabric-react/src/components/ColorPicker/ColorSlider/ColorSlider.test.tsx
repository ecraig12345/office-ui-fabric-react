import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount, ReactWrapper } from 'enzyme';

import { ColorSlider } from './ColorSlider';
import { ColorSliderBase, IColorSliderState } from './ColorSlider.base';
import { IColorSlider, IColorSliderProps } from './ColorSlider.types';

describe('ColorSlider', () => {
  let wrapper: ReactWrapper<IColorSliderProps, IColorSliderState, ColorSliderBase> | undefined;
  let component: renderer.ReactTestRenderer | undefined;
  const ref = React.createRef<IColorSlider>();

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

  it('renders hue slider correctly', () => {
    component = renderer.create(<ColorSlider type="hue" defaultValue={30} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders alpha slider correctly', () => {
    component = renderer.create(<ColorSlider type="alpha" defaultValue={30} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('defaults to 0', () => {
    wrapper = mount(<ColorSlider componentRef={ref} />);
    expect(ref.current!.value).toBe(0);
  });

  it('respects value prop', () => {
    wrapper = mount(<ColorSlider value={15} onChange={jest.fn()} componentRef={ref} />);
    expect(ref.current!.value).toBe(15);

    wrapper.setProps({ value: 20 });
    expect(ref.current!.value).toBe(20);
  });

  it('respects defaultValue prop', () => {
    wrapper = mount(<ColorSlider defaultValue={15} componentRef={ref} />);
    expect(ref.current!.value).toBe(15);
  });

  it('ignores updates to defaultValue prop', () => {
    wrapper = mount(<ColorSlider defaultValue={15} componentRef={ref} />);
    wrapper.setProps({ defaultValue: 30 });
    expect(ref.current!.value).toBe(15);
  });

  it('handles mouse events when uncontrolled', () => {
    const onChange = jest.fn();
    wrapper = mount(<ColorSlider defaultValue={0} onChange={onChange} componentRef={ref} />);

    const slider = wrapper.find('.ms-ColorPicker-slider');
    const thumb = wrapper.find('.ms-ColorPicker-thumb');

    slider.getDOMNode().getBoundingClientRect = () => ({
      left: 0,
      top: 0,
      right: 100,
      bottom: 18,
      width: 100,
      height: 18
    });

    thumb.simulate('mousedown', { type: 'mousedown', clientX: 100, clientY: 0 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(ref.current!.value).toEqual(359);

    // ignore movement out of range
    thumb.simulate('mousemove', { type: 'mousemove', clientX: 200, clientY: 0 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(ref.current!.value).toEqual(359);

    // mouse up => keep setting
    thumb.simulate('mouseup');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(ref.current!.value).toEqual(359);
  });

  it('handles mouse events when controlled', () => {
    let newValue: number | undefined;
    const onChange = jest.fn((ev: React.SyntheticEvent<HTMLElement>, value: number) => {
      newValue = value;
    });
    wrapper = mount(<ColorSlider value={0} onChange={onChange} componentRef={ref} />);

    const slider = wrapper.find('.ms-ColorPicker-slider');
    const thumb = wrapper.find('.ms-ColorPicker-thumb');

    slider.getDOMNode().getBoundingClientRect = () => ({
      left: 0,
      top: 0,
      right: 100,
      bottom: 18,
      width: 100,
      height: 18
    });

    // For the controlled tests, it should call onChange but not update the displayed value
    // until props are updated.

    thumb.simulate('mousedown', { type: 'mousedown', clientX: 100, clientY: 0 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(newValue).toEqual(359);
    expect(ref.current!.value).toEqual(0);
    wrapper.setProps({ value: 359 });
    expect(ref.current!.value).toEqual(359);

    // ignore movement out of range
    thumb.simulate('mousemove', { type: 'mousemove', clientX: 200, clientY: 0 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(ref.current!.value).toEqual(359);

    // mouse up => keep setting
    thumb.simulate('mouseup');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(ref.current!.value).toEqual(359);
  });
});
