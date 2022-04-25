import { Box, Button, Stack, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '../../services/api';
import { FileInput } from '../Input/FileInput';
import { TextInput } from '../Input/TextInput';

interface FormAddImageProps {
  closeModal: () => void;
}

type Data = {
  imageUrl: string;
  title: string;
  description: string;
};

const sendForm = async ({
  imageUrl,
  title,
  description,
}: Data): Promise<unknown> => {
  return api.post('/api/images', {
    url: imageUrl,
    title,
    description,
  });
};

export function FormAddImage({ closeModal }: FormAddImageProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState('');
  const [localImageUrl, setLocalImageUrl] = useState('');
  const toast = useToast();

  /* const formValidations = {
    image: {
      // TODO REQUIRED, LESS THAN 10 MB AND ACCEPTED FORMATS VALIDATIONS
    },
    title: {
      // TODO REQUIRED, MIN AND MAX LENGTH VALIDATIONS
    },
    description: {
      // TODO REQUIRED, MAX LENGTH VALIDATIONS
    },
  }; */

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (formData: Data) => sendForm(formData),
    // TODO MUTATION API POST REQUEST,
    {
      // TODO ONSUCCESS MUTATION
      onSuccess: () => {
        queryClient.invalidateQueries('images');
      },
    }
  );

  const { register, handleSubmit, reset, formState, setError, trigger } =
    useForm();
  const { errors } = formState;

  const onSubmit = async (data: Record<string, unknown>, e): Promise<void> => {
    e.preventDefault();
    try {
      if (!imageUrl) {
        toast({
          title: 'Imagem não adicionada',
          description:
            'É preciso adicionar e aguardar o upload de uma imagem antes de realizar o cadastro.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } else {
        await mutation.mutateAsync({
          imageUrl,
          title: String(data.title),
          description: String(data.description),
        });
        toast({
          title: 'Imagem cadastrada',
          description: 'Sua imagem foi cadastrada com sucesso.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
      // TODO SHOW ERROR TOAST IF IMAGE URL DOES NOT EXISTS
      // TODO EXECUTE ASYNC MUTATION
      // TODO SHOW SUCCESS TOAST
    } catch {
      // TODO SHOW ERROR TOAST IF SUBMIT FAILED
      toast({
        title: 'Falha no cadastro',
        description: 'Ocorreu um erro ao tentar cadastrar a sua imagem.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      // TODO CLEAN FORM, STATES AND CLOSE MODAL
      setImageUrl('');
      setLocalImageUrl('');
      reset();
      closeModal();
    }
  };

  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FileInput
          setImageUrl={setImageUrl}
          localImageUrl={localImageUrl}
          setLocalImageUrl={setLocalImageUrl}
          setError={setError}
          trigger={trigger}
          {...register('image', {
            required: 'A imagem é obrigatória',
            validate: {
              size: v => {
                if (v[0].size <= 10000000) {
                  return true;
                }
                return 'A imagem deve ter no máximo 10 MB';
              },
              acceptedFormats: v => {
                const { type } = v[0];
                if (
                  type === 'image/jpeg' ||
                  type === 'image/png' ||
                  type === 'image/jpg' ||
                  type === 'image/gif'
                ) {
                  return true;
                }
                return 'A imagem deve ser do tipo JPEG, PNG, JPG ou GIF';
              },
            },
          })}
          error={errors.image}
        />

        <TextInput
          placeholder="Título da imagem..."
          {...register('title', {
            required: 'O título é obrigatório',
            minLength: 2,
            maxLength: 20,
          })}
          error={errors.title}
        />

        <TextInput
          placeholder="Descrição da imagem..."
          {...register('description', {
            required: 'A descrição é obrigatória',
            maxLength: 65,
          })}
          error={errors.description}
        />
      </Stack>

      <Button
        my={6}
        isLoading={formState.isSubmitting}
        isDisabled={formState.isSubmitting}
        type="submit"
        w="100%"
        py={6}
      >
        Enviar
      </Button>
    </Box>
  );
}
