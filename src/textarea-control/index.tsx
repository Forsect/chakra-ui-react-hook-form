import React from 'react';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

import { BaseProps, FormControl } from '../form-control';

export type TextareaControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = BaseProps<TFieldValues, TName> & {
  textareaProps?: TextareaProps;
};

export const TextareaControl = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  textareaProps,
  ...rest
}: TextareaControlProps<TFieldValues, TName>) => {
  const {
    field,
    formState: { isSubmitting },
  } = useController({ name, control });

  return (
    <FormControl control={control} name={name} label={label} {...rest}>
      <Textarea
        {...field}
        id={name}
        isDisabled={isSubmitting}
        {...textareaProps}
      />
    </FormControl>
  );
};
