import React from 'react';
import { CheckboxGroup, CheckboxGroupProps, Stack, StackProps } from '@chakra-ui/react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

import { BaseProps, FormControl } from '../form-control';

export type CheckboxGroupControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = BaseProps<TFieldValues, TName> & {
  checkboxGroupProps?: CheckboxGroupProps;
  stackProps?: StackProps;
};

export function CheckboxGroupControl<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  checkboxGroupProps,
  stackProps,
  children,
  ...rest
}: CheckboxGroupControlProps<TFieldValues, TName>) {
  const {
    field: { ref, ...field },
  } = useController({ name, control });

  return (
    <FormControl control={control} name={name} label={label} {...rest}>
      <CheckboxGroup {...field} {...checkboxGroupProps}>
        <Stack pl={6} mt={1} spacing={1} {...stackProps}>
          {children}
        </Stack>
      </CheckboxGroup>
    </FormControl>
  );
}
