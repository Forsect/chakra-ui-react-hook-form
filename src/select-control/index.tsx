import React from 'react';
import { Select, SelectProps } from '@chakra-ui/react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

import { BaseProps, FormControl } from '../form-control';

export type SelectControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = BaseProps<TFieldValues, TName> & {
  selectProps?: SelectProps;
};

export const SelectControl = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  selectProps,
  children,
  ...rest
}: SelectControlProps<TFieldValues, TName>) => {
  const {
    field,
    formState: { isSubmitting },
  } = useController({ name, control });

  return (
    <FormControl control={control} name={name} label={label} {...rest}>
      <Select {...field} id={name} isDisabled={isSubmitting} {...selectProps}>
        {children}
      </Select>
    </FormControl>
  );
};

export default SelectControl;
