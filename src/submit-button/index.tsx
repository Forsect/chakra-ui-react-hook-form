import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { Control, FieldValues, useFormState } from 'react-hook-form';

export type SubmitButtonProps<TFieldValues extends FieldValues = FieldValues> = ButtonProps & {
  control: Control<TFieldValues>;
};

export function SubmitButton<TFieldValues extends FieldValues = FieldValues>({
  children,
  control,
  isLoading,
  ...rest
}: SubmitButtonProps<TFieldValues>) {
  const { isSubmitting } = useFormState({ control });

  return (
    <Button type='submit' isLoading={isLoading || isSubmitting} colorScheme='teal' {...rest}>
      {children}
    </Button>
  );
}
