import React from 'react';
import { Input, InputProps } from '@chakra-ui/react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

import { BaseProps, FormControl } from '../form-control';

export type InputControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = BaseProps<TFieldValues, TName> & { inputProps?: InputProps };

export const InputControl = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  inputProps,
  ...rest
}: InputControlProps<TFieldValues, TName>) => {
  const {
    field,
    formState: { isSubmitting },
  } = useController({ name, control });

  return (
    <FormControl control={control} name={name} label={label} {...rest}>
      <Input {...field} id={name} isDisabled={isSubmitting} {...inputProps} />
    </FormControl>
  );
};
