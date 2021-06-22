import { 
  FormControl, 
  FormLabel, 
  Input as Chakrainput, 
  InputProps as ChakraInputProps 
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest}: InputProps) {
  return (
    <FormControl>
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
        {...rest}
      />
    </FormControl>
  );
}