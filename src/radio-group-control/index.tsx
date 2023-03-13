import React from 'react';
import { RadioGroup, RadioGroupProps, Stack, StackProps } from '@chakra-ui/react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

import { BaseProps, FormControl } from '../form-control';

export type RadioGroupControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = BaseProps<TFieldValues, TName> & {
  radioGroupProps?: RadioGroupProps;
  stackProps?: StackProps;
};

export const RadioGroupControl = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  radioGroupProps,
  stackProps,
  children,
  ...rest
}: RadioGroupControlProps<TFieldValues, TName>) => {
  const {
    field,
    formState: { isSubmitting },
  } = useController({ name, control });

  return (
    <FormControl control={control} name={name} label={label} {...rest}>
      <RadioGroup {...field} isDisabled={isSubmitting} {...radioGroupProps}>
        <Stack direction='row' {...stackProps}>
          {children}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};
