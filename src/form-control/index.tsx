import React from 'react';
import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormHelperTextProps,
  FormLabel,
  FormLabelProps,
} from '@chakra-ui/react';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type BaseProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = WithRequired<UseControllerProps<TFieldValues, TName>, 'control'> &
  Omit<FormControlProps, 'label'> & {
    label?: React.ReactNode;
    labelProps?: FormLabelProps;
    helperText?: React.ReactNode;
    helperTextProps?: FormHelperTextProps;
    errorMessageProps?: FormErrorMessageProps;
  };

export const FormControl = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  children,
  control,
  name,
  label,
  labelProps,
  helperText,
  helperTextProps,
  errorMessageProps,
  ...rest
}: BaseProps<TFieldValues, TName>) => {
  const {
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <ChakraFormControl isInvalid={invalid} {...rest}>
      {label && typeof label === 'string' ? (
        <FormLabel htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
      ) : (
        label
      )}
      {children}
      {error && <FormErrorMessage {...errorMessageProps}>{error.message}</FormErrorMessage>}
      {helperText && typeof helperText === 'string' ? (
        <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>
      ) : (
        helperText
      )}
    </ChakraFormControl>
  );
};
