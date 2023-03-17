import { Input, InputProps } from '@chakra-ui/react';
import React from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

import { BaseProps, FormControl } from '../form-control';

export type InputControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = BaseProps<TFieldValues, TName> & {
  inputProps?: InputProps;
  valueAsNumber?: boolean;
  valueAsDate?: boolean;
  setValueAs?: (value: any) => any;
};

export function InputControl<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  inputProps,
  valueAsNumber,
  valueAsDate,
  setValueAs,
  ...rest
}: InputControlProps<TFieldValues, TName>) {
  const {
    field: { onChange, ...field },
  } = useController({ name, control });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(
      valueAsNumber
        ? e.target.value === ''
          ? NaN
          : +e.target.value
        : valueAsDate
        ? new Date(e.target.value)
        : setValueAs
        ? setValueAs(e.target.value)
        : e.target.value
    );

  return (
    <FormControl control={control} name={name} label={label} {...rest}>
      <Input onChange={handleChange} {...field} id={name} {...inputProps} />
    </FormControl>
  );
}
