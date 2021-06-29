import { forwardRef, ForwardRefRenderFunction } from 'react';
import { 
  FormControl, 
  FormLabel, 
  Input as Chakrainput, 
  InputProps as ChakraInputProps,
  FormErrorMessage
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface InputBaseProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = 
  ({ name, label, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Chakrainput 
        name={name} 
        id={name}
        focusBorderColor="pink.500" 
        bg="gray.900"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);