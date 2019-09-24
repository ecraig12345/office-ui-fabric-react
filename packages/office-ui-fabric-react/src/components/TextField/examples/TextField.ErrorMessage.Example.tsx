import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { useToggle } from '@uifabric/react-hooks';

const stackTokens: IStackTokens = { childrenGap: 20, maxWidth: 350 };

export const TextFieldErrorMessageExample: React.FunctionComponent = () => {
  // Screen readers will read all errors on a page as soon as they are present,
  // making this demo potentially unpleasant when using a screen reader.
  // Not rendering the controls by default makes for a more pleasant experience.
  const [showFields, toggleShowFields] = useToggle(false);

  return (
    <Stack tokens={stackTokens}>
      <Toggle label="Show text fields" inlineLabel checked={showFields} onChange={toggleShowFields} />
      {showFields && (
        <>
          <strong>Hint: the input length must be less than 3.</strong>

          <TextField label="String-based validation" onGetErrorMessage={_getErrorMessage} />
          <TextField label="Promise-based validation" onGetErrorMessage={_getErrorMessagePromise} />
          <TextField
            label="String-based validation on render"
            defaultValue="Shows an error message on render"
            onGetErrorMessage={_getErrorMessage}
          />
          <TextField
            label="String-based validation only on change"
            defaultValue="Validates only on input change, not on render"
            onGetErrorMessage={_getErrorMessage}
            validateOnLoad={false}
          />
          <TextField
            label="Promise-based validation"
            defaultValue="Shows an error message 5 seconds after render"
            onGetErrorMessage={_getErrorMessagePromise}
          />
          <TextField
            label="Both description and error message"
            defaultValue="Shows description and error message on render"
            description="Field description"
            onGetErrorMessage={_getErrorMessage}
          />
          <TextField
            label="Deferred string-based validation"
            placeholder="Validates after user stops typing for 2 seconds"
            onGetErrorMessage={_getErrorMessage}
            deferredValidationTime={2000}
          />
          <TextField
            label="Validates only on focus and blur"
            placeholder="Validates only on input focus and blur"
            onGetErrorMessage={_getErrorMessage}
            validateOnFocusIn
            validateOnFocusOut
          />
          <TextField
            label="Validates only on blur"
            placeholder="Validates only on input blur"
            onGetErrorMessage={_getErrorMessage}
            validateOnFocusOut
          />
          <TextField label="Underlined field:" defaultValue="This value is too long" underlined onGetErrorMessage={_getErrorMessage} />
          <TextField
            label="Uses the errorMessage property to set an error state"
            placeholder="This field always has an error"
            errorMessage="This is a statically set error message"
          />
        </>
      )}
    </Stack>
  );
};

function _getErrorMessage(value: string): string {
  return value.length < 3 ? '' : `Input value length must be less than 3. Actual length is ${value.length}.`;
}

function _getErrorMessagePromise(value: string): Promise<string> {
  return new Promise(resolve => {
    // resolve the promise after 3 second.
    setTimeout(() => resolve(_getErrorMessage(value)), 5000);
  });
}
