import * as React from 'react';
import { getNativeProps, divProperties } from './properties';

// tslint:disable:no-any no-string-literal

describe('getNativeProps', () => {
  it('can pass through data tags', () => {
    let result = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(
      {
        'data-automation-id': 1
      },
      divProperties
    );
    expect((result as any)['data-automation-id']).toEqual(1);
  });

  it('can pass through aria tags', () => {
    let result = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(
      {
        'aria-label': 1
      },
      divProperties
    );
    expect((result as any)['aria-label']).toEqual(1);
  });

  it('can pass through basic div properties and events', () => {
    let result = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(
      {
        className: 'foo',
        onClick: () => {
          /* no-op */
        },
        onClickCapture: () => {
          /* no-op */
        }
      },
      divProperties
    );

    expect(result.className).toEqual('foo');
    expect(typeof result.onClick).toEqual('function');

    expect(typeof (result as any)['onClickCapture']).toEqual('function');
  });

  it('can remove unexpected properties', () => {
    let result = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(
      {
        foobar: 1,
        className: 'hi'
      },
      divProperties
    );

    expect(result.className).toEqual('hi');
    expect((result as any)['foobar']).toEqual(undefined);
  });

  it('can exclude properties', () => {
    let result = getNativeProps<any>({ a: 1, b: 2 }, ['a', 'b'], ['b']);

    expect(result.a).toBeDefined();
    expect(result.b).toBeUndefined();
  });

  it('works with tag names', () => {
    const props = { className: 'foo', value: 'foo', bar: 'nope' };
    const inputResult = getNativeProps<any>(props, 'input');
    expect(inputResult.value).toBeDefined();
    expect(inputResult.className).toBeDefined();
    expect(inputResult.bar).toBeUndefined();

    const divResult = getNativeProps<any>(props, 'div');
    expect(divResult.className).toBeDefined();
    expect(divResult.value).toBeUndefined();
    expect(divResult.bar).toBeUndefined();
  });
});
