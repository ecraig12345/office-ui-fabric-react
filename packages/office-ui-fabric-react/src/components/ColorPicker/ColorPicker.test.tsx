import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount, ReactWrapper } from 'enzyme';
import * as ReactTestUtils from 'react-dom/test-utils';

import { ColorPicker } from './ColorPicker';
import { ColorPickerBase, IColorPickerState } from './ColorPicker.base';
import { IColorPickerProps } from './ColorPicker.types';
import { IColor } from '../../utilities/color/interfaces';
import { getColorFromString } from '../../utilities/color/getColorFromString';
import { mockEvent } from '../../common/testUtilities';

const noOp = () => undefined;

describe('ColorPicker', () => {
  let wrapper: ReactWrapper<IColorPickerProps, IColorPickerState, ColorPickerBase> | undefined;
  let colorPicker: ColorPickerBase | null = null;
  const colorPickerRef = (ref: ColorPickerBase | null) => {
    colorPicker = ref;
  };

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = undefined;
    }
  });

  it('renders correctly', () => {
    const component = renderer.create(<ColorPicker defaultColor="#abcdef" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('defaults to white if no color provided', () => {
    wrapper = mount(<ColorPicker componentRef={colorPickerRef} />);

    expect(colorPicker!.color.hex).toEqual('ffffff');
  });

  it('uses provided color string', () => {
    wrapper = mount(<ColorPicker color="#abcdef" onChange={noOp} componentRef={colorPickerRef} />);

    expect(colorPicker!.color.hex).toEqual('abcdef');
  });

  it('uses provided color object', () => {
    const color = getColorFromString('#abcdef');
    wrapper = mount(<ColorPicker color={color} onChange={noOp} componentRef={colorPickerRef} />);

    expect(colorPicker!.color).toEqual(color);
  });

  it('uses provided color object', () => {
    const color = getColorFromString('#abcdef')!;
    wrapper = mount(<ColorPicker color={color} onChange={noOp} componentRef={colorPickerRef} />);

    expect(colorPicker!.color).toEqual(color);
  });

  it('respects color prop change', () => {
    const onChange = jest.fn();
    wrapper = mount(<ColorPicker color="#abcdef" onChange={onChange} componentRef={colorPickerRef} />);

    wrapper.setProps({ color: '#AEAEAE' });
    expect(colorPicker!.color.hex).toEqual('aeaeae');
    // shouldn't call onChange when the consumer updates the color prop
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('uses provided defaultColor string', () => {
    wrapper = mount(<ColorPicker defaultColor="#abcdef" componentRef={colorPickerRef} />);

    expect(colorPicker!.color.hex).toEqual('abcdef');
  });

  it('uses provided defaultColor object', () => {
    const color = getColorFromString('#abcdef');
    wrapper = mount(<ColorPicker defaultColor={color} componentRef={colorPickerRef} />);

    expect(colorPicker!.color).toEqual(color);
  });

  it('defaults to white if color is invalid', () => {
    wrapper = mount(<ColorPicker defaultColor="foo" componentRef={colorPickerRef} />);

    expect(colorPicker!.color.hex).toEqual('ffffff');
  });

  it('ignores defaultColor prop change', () => {
    wrapper = mount(<ColorPicker defaultColor="#abcdef" componentRef={colorPickerRef} />);

    wrapper.setProps({ defaultColor: '#AEAEAE' });
    expect(colorPicker!.color.hex).toEqual('abcdef');
  });

  it('ignores invalid updates to color prop', () => {
    const onChange = jest.fn();
    wrapper = mount(<ColorPicker color="#abcdef" onChange={onChange} componentRef={colorPickerRef} />);

    wrapper.setProps({ color: 'foo' });
    expect(colorPicker!.color.hex).toEqual('abcdef');
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('hides alpha control slider', () => {
    wrapper = mount(<ColorPicker defaultColor="#FFFFFF" alphaSliderHidden={true} />);

    const alphaSlider = wrapper.find('.is-alpha');
    const tableHeaders = wrapper.find('thead td');
    const inputs = wrapper.find('.ms-TextField');

    // There should only be table headers and inputs for hex, red, green, and blue (no alpha)
    expect(alphaSlider.exists()).toBe(false);
    expect(tableHeaders).toHaveLength(4);
    expect(inputs).toHaveLength(4);
  });

  it('renders default RGBA/Hex strings', () => {
    wrapper = mount(<ColorPicker defaultColor="#FFFFFF" />);

    const tableHeaders = wrapper.find('thead td');
    const textHeaders = [
      ColorPickerBase.defaultProps.hexLabel,
      ColorPickerBase.defaultProps.redLabel,
      ColorPickerBase.defaultProps.greenLabel,
      ColorPickerBase.defaultProps.blueLabel,
      ColorPickerBase.defaultProps.alphaLabel
    ];

    tableHeaders.forEach((node, index) => {
      expect(node.text()).toEqual(textHeaders[index]);
    });
  });

  it('renders custom RGBA/Hex strings', () => {
    const textHeaders = ['Custom Hex', 'Custom Red', 'Custom Green', 'Custom Blue', 'Custom Alpha'];

    wrapper = mount(
      <ColorPicker
        defaultColor="#FFFFFF"
        hexLabel={textHeaders[0]}
        redLabel={textHeaders[1]}
        greenLabel={textHeaders[2]}
        blueLabel={textHeaders[3]}
        alphaLabel={textHeaders[4]}
      />
    );

    const tableHeaders = wrapper.find('thead td');
    tableHeaders.forEach((node, index) => {
      expect(node.text()).toEqual(textHeaders[index]);
    });
  });

  it('keeps color value when tabbing between Hex and RGBA text inputs', () => {
    const colorStringValue = 'abcdef';
    const colorChangeSpy = jest.fn();
    const inputClassName = 'input-tab-test';
    wrapper = mount(
      <ColorPicker
        defaultColor={`#${colorStringValue}`}
        onChange={colorChangeSpy}
        componentRef={colorPickerRef}
        styles={{ input: inputClassName }}
      />
    );

    expect(colorPicker!.color.hex).toEqual(colorStringValue);
    expect(colorChangeSpy).toHaveBeenCalledTimes(0);

    // Tab between text inputs checking state after each time.
    const allInputs = wrapper.find(`.${inputClassName} input`);
    expect(allInputs.length).toBe(5);

    allInputs.forEach(input => {
      input.simulate('focus');
      input.simulate('blur');

      expect(colorPicker!.color.hex).toEqual(colorStringValue);
      expect(colorChangeSpy).toHaveBeenCalledTimes(0);
    });
  });

  it('allows updating text fields', () => {
    let updatedColor: string | undefined;
    const onChange = jest.fn((ev: any, color: IColor) => {
      updatedColor = color.str;
    });

    wrapper = mount(<ColorPicker onChange={onChange} defaultColor="#000000" componentRef={colorPickerRef} />);

    const inputs = wrapper.getDOMNode().querySelectorAll('.ms-ColorPicker-input input');

    const redInput = inputs[1];
    ReactTestUtils.Simulate.input(redInput, mockEvent('255'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(updatedColor).toBe('#ff0000');
    expect(colorPicker!.color.str).toBe('#ff0000');
    // blur and make sure nothing changes
    ReactTestUtils.Simulate.blur(redInput);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(colorPicker!.color.str).toBe('#ff0000');

    const hexInput = inputs[0];
    ReactTestUtils.Simulate.input(hexInput, mockEvent('00ff00'));
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(updatedColor).toBe('#00ff00');
    expect(colorPicker!.color.str).toBe('#00ff00');
    ReactTestUtils.Simulate.blur(hexInput);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(colorPicker!.color.str).toBe('#00ff00');

    const alphaInput = inputs[4];
    ReactTestUtils.Simulate.input(alphaInput, mockEvent('50'));
    ReactTestUtils.Simulate.blur(alphaInput);
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(updatedColor).toBe('rgba(0, 255, 0, 0.5)');
    expect(colorPicker!.color.str).toBe('rgba(0, 255, 0, 0.5)');
  });

  it('allows typing in a 6-char hex value', () => {
    let updatedColor: IColor | undefined;
    const onChange = jest.fn((ev: any, color: IColor) => {
      updatedColor = color;
    });

    wrapper = mount(<ColorPicker onChange={onChange} color="#000000" componentRef={colorPickerRef} />);

    const hexInput = wrapper.getDOMNode().querySelector('.ms-ColorPicker-input input')!;
    const testHexValue = 'f1f2f3';

    ReactTestUtils.Simulate.input(hexInput, mockEvent(testHexValue));
    expect(updatedColor!.hex).toBe(testHexValue);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('allows typing in a 3-char hex value', () => {
    let updatedColor: IColor | undefined;
    const onChange = jest.fn((ev: any, color: IColor) => {
      updatedColor = color;
    });

    wrapper = mount(<ColorPicker onChange={onChange} color="#000000" componentRef={colorPickerRef} />);

    const hexInput = wrapper.getDOMNode().querySelector('.ms-ColorPicker-input input')!;

    ReactTestUtils.Simulate.input(hexInput, mockEvent('faf'));
    expect(onChange).toHaveBeenCalledTimes(0);
    ReactTestUtils.Simulate.blur(hexInput);
    expect(updatedColor!.hex).toBe('ffaaff');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('allows updating text fields when alpha slider is hidden', () => {
    let updatedColor: string | undefined;
    const onChange = jest.fn((ev: any, color: IColor) => {
      updatedColor = color.str;
    });

    wrapper = mount(<ColorPicker onChange={onChange} defaultColor="#000000" alphaSliderHidden componentRef={colorPickerRef} />);

    const inputs = wrapper.getDOMNode().querySelectorAll('.ms-ColorPicker-input input');

    const redInput = inputs[1];
    ReactTestUtils.Simulate.input(redInput, mockEvent('255'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(updatedColor).toBe('#ff0000');
    expect(colorPicker!.color.str).toBe('#ff0000');
    // blur and make sure nothing changes
    ReactTestUtils.Simulate.blur(redInput);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(colorPicker!.color.str).toBe('#ff0000');

    const hexInput = inputs[0];
    ReactTestUtils.Simulate.input(hexInput, mockEvent('00ff00'));
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(updatedColor).toBe('#00ff00');
    expect(colorPicker!.color.str).toBe('#00ff00');
    ReactTestUtils.Simulate.blur(hexInput);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(colorPicker!.color.str).toBe('#00ff00');
  });

  it('rejects rgb input too long', () => {
    const onChange = jest.fn();
    wrapper = mount(<ColorPicker onChange={onChange} defaultColor="#000000" componentRef={colorPickerRef} />);

    const redInput = wrapper.getDOMNode().querySelectorAll('.ms-ColorPicker-input input')[1];

    // input shoud be totally ignored
    ReactTestUtils.Simulate.input(redInput, mockEvent('1234'));
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(colorPicker!.state.editingColor).toBeFalsy();
    expect(colorPicker!.color.r).toEqual(0);
    // still totally ignored on blur
    ReactTestUtils.Simulate.blur(redInput);
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(colorPicker!.color.r).toEqual(0);
  });

  it('rejects invalid hex input', () => {
    const onChange = jest.fn();
    wrapper = mount(<ColorPicker onChange={onChange} defaultColor="#000000" componentRef={colorPickerRef} />);

    const hexInput = wrapper.getDOMNode().querySelectorAll('.ms-ColorPicker-input input')[0];

    // input too long => totally ignored
    ReactTestUtils.Simulate.input(hexInput, mockEvent('1234567'));
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(colorPicker!.state.editingColor).toBeFalsy();
    expect(colorPicker!.color.hex).toEqual('000000');
    // still totally ignored on blur
    ReactTestUtils.Simulate.blur(hexInput);
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(colorPicker!.color.hex).toEqual('000000');

    // input with invalid characters => totally ignored
    ReactTestUtils.Simulate.input(hexInput, mockEvent('foo'));
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(colorPicker!.state.editingColor).toBeFalsy();
    expect(colorPicker!.color.hex).toEqual('000000');
    // still totally ignored on blur
    ReactTestUtils.Simulate.blur(hexInput);
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(colorPicker!.color.hex).toEqual('000000');
  });

  it('reverts empty rgb input to previous value on blur', () => {
    const onChange = jest.fn();
    // #1fffff is red=31
    wrapper = mount(<ColorPicker onChange={onChange} defaultColor="#1fffff" componentRef={colorPickerRef} />);

    const redInput = wrapper.getDOMNode().querySelectorAll('.ms-ColorPicker-input input')[1] as HTMLInputElement;

    ReactTestUtils.Simulate.input(redInput, mockEvent(''));
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(redInput.value).toEqual('');
    expect(colorPicker!.state.editingColor).toEqual({ component: 'r', value: '' });
    expect(colorPicker!.color.r).toEqual(31);

    ReactTestUtils.Simulate.blur(redInput);
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(redInput.value).toEqual('31');
    expect(colorPicker!.state.editingColor).toBeFalsy();
    expect(colorPicker!.color.r).toEqual(31);
  });

  it('reverts empty hex input to previous value on blur', () => {
    const onChange = jest.fn();
    wrapper = mount(<ColorPicker onChange={onChange} defaultColor="#1fffff" componentRef={colorPickerRef} />);

    const hexInput = wrapper.getDOMNode().querySelectorAll('.ms-ColorPicker-input input')[0] as HTMLInputElement;

    ReactTestUtils.Simulate.input(hexInput, mockEvent(''));
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(hexInput.value).toEqual('');
    expect(colorPicker!.state.editingColor).toEqual({ component: 'hex', value: '' });
    expect(colorPicker!.color.hex).toEqual('1fffff');

    ReactTestUtils.Simulate.blur(hexInput);
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(hexInput.value).toEqual('1fffff');
    expect(colorPicker!.state.editingColor).toBeFalsy();
    expect(colorPicker!.color.hex).toEqual('1fffff');
  });

  it('corrects invalid rgb on blur', () => {
    let updatedColor: string | undefined;
    const onChange = jest.fn((ev: any, color: IColor) => {
      updatedColor = color.str;
    });

    wrapper = mount(<ColorPicker onChange={onChange} defaultColor="#000000" componentRef={colorPickerRef} />);

    const redInput = wrapper.getDOMNode().querySelectorAll('.ms-ColorPicker-input input')[1] as HTMLInputElement;

    ReactTestUtils.Simulate.input(redInput, mockEvent('355'));
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(redInput.value).toEqual('355');
    expect(colorPicker!.state.editingColor).toEqual({ component: 'r', value: '355' });
    expect(colorPicker!.color.r).toEqual(0);

    ReactTestUtils.Simulate.blur(redInput);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(redInput.value).toEqual('255');
    expect(updatedColor).toEqual('#ff0000');
    expect(colorPicker!.state.editingColor).toBeFalsy();
    expect(colorPicker!.color.r).toEqual(255);
  });

  it('corrects invalid hex on blur', () => {
    let updatedColor: string | undefined;
    const onChange = jest.fn((ev: any, color: IColor) => {
      updatedColor = color.str;
    });

    wrapper = mount(<ColorPicker onChange={onChange} defaultColor="#000000" componentRef={colorPickerRef} />);

    const hexInput = wrapper.getDOMNode().querySelectorAll('.ms-ColorPicker-input input')[0] as HTMLInputElement;

    ReactTestUtils.Simulate.input(hexInput, mockEvent('1234'));
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(hexInput.value).toEqual('1234');
    expect(colorPicker!.state.editingColor).toEqual({ component: 'hex', value: '1234' });
    expect(colorPicker!.color.hex).toEqual('000000');

    ReactTestUtils.Simulate.blur(hexInput);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(hexInput.value).toEqual('123');
    expect(updatedColor).toEqual('#123');
    expect(colorPicker!.state.editingColor).toBeFalsy();
    expect(colorPicker!.color.str).toEqual('#123');
  });

  it('handles rgb input after clearing field', () => {});
});
