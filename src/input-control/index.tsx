import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftAddonProps,
  InputRightAddon,
  InputRightAddonProps,
  InputProps,
  InputGroupProps,
  InputRightElementProps,
  InputLeftElementProps,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
import { BaseProps, FormControl } from '../form-control';
export type InputControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = BaseProps<TFieldValues, TName> & {
  inputProps?: InputProps;
  rightAddon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
  rightElementProps?: InputRightElementProps;
  leftElementProps?: InputLeftElementProps;
  leftAddonProps?: InputLeftAddonProps;
  rightAddonProps?: InputRightAddonProps;
  inputGroupProps?: InputGroupProps;
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
  leftAddonProps,
  rightAddonProps,
  leftAddon,
  rightAddon,
  leftElement,
  rightElement,
  leftElementProps,
  rightElementProps,
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
      <InputGroup>
        {leftElement && <InputLeftElement {...leftElementProps}>{leftElement}</InputLeftElement>}
        {leftAddon && <InputLeftAddon {...leftAddonProps}>{leftAddon}</InputLeftAddon>}
        <Input onChange={handleChange} {...field} id={name} {...inputProps} />
        {rightAddon && <InputRightAddon {...rightAddonProps}>{rightAddon}</InputRightAddon>}
        {rightElement && <InputRightElement {...rightElementProps}>{rightElement}</InputRightElement>}
      </InputGroup>
    </FormControl>
  );
}
