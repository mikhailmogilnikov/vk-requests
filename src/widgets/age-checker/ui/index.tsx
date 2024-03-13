import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Button,
  Div,
  FormItem,
  Group,
  Input,
  Placeholder,
  Spacing,
  Spinner,
  Title,
} from '@vkontakte/vkui';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getAgeByNameQueries } from '../api';
import { AgeCheckSchemaFormData, ageCheckSchema } from '../model/schema';

export const AgeChecker = () => {
  const [prevFirstName, setPrevFirstName] = useState('');
  const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | null>(null);
  const {
    trigger,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<AgeCheckSchemaFormData>({
    resolver: yupResolver(ageCheckSchema),
  });

  const { data, error, isLoading, refetch } = useQuery(
    getAgeByNameQueries(watch('firstName')),
  );

  const queryClient = useQueryClient();

  const onSubmit = (formData: AgeCheckSchemaFormData) => {
    const firstName = formData.firstName;
    if (firstName && prevFirstName !== firstName) {
      queryClient.cancelQueries({ queryKey: ['age_by_name'] });
      refetch();
    }
    setPrevFirstName(firstName);
  };

  const handleInputChange = () => {
    trigger();
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }
    setTimeoutRef(
      setTimeout(() => {
        handleSubmit(onSubmit)();
      }, 3000),
    );
  };

  const isAgeExists = data?.age !== null;

  return (
    <Group>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='firstName'
          control={control}
          render={({
            field: { onChange, value, onBlur, ref, name },
            fieldState: { invalid },
          }) => (
            <FormItem
              status={invalid ? 'error' : 'default'}
              htmlFor={name}
              bottom={errors.firstName?.message}
              top='Имя'
            >
              <Input
                id={name}
                autoFocus
                value={value || ''}
                onChange={(e) => {
                  onChange(e);
                  handleInputChange();
                }}
                onBlur={onBlur}
                getRef={ref}
              />
            </FormItem>
          )}
        />
        <FormItem>
          <Button type='submit' size='l' stretched>
            Отправить
          </Button>
        </FormItem>
      </form>

      {isLoading && (
        <Div>
          <Spacing />
          <Spinner />
        </Div>
      )}

      {data && isAgeExists && (
        <Div>
          <Spacing />
          <Title>Ваш возраст: {data.age}</Title>
        </Div>
      )}

      {(error || !isAgeExists) && (
        <Div>
          <Spacing />
          <Placeholder>Попробуйте позже или введите другое имя</Placeholder>
        </Div>
      )}
    </Group>
  );
};
