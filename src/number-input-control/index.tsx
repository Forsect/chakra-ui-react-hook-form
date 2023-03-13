import React from 'react';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from '@chakra-ui/react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

import { BaseProps, FormControl } from '../form-control';

export type NumberInputControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = BaseProps<TFieldValues, TName> & {
  numberInputProps?: NumberInputProps;
  showStepper?: boolean;
  children?: React.ReactNode;
};

export const NumberInputControl = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  showStepper = true,
  children,
  numberInputProps,
  ...rest
}: NumberInputControlProps<TFieldValues, TName>) => {
  const {
    field,
    formState: { isSubmitting },
  } = useController({ name, control });

  return (
    <FormControl control={control} name={name} label={label} {...rest}>
      <NumberInput {...field} id={name} isDisabled={isSubmitting} {...numberInputProps}>
        <NumberInputField name={name} />
        {showStepper && (
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        )}
        {children}
      </NumberInput>
    </FormControl>
  );
};
