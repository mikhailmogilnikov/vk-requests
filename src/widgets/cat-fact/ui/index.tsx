import { useQuery } from '@tanstack/react-query';
import {
  Button,
  Div,
  Group,
  Header,
  Placeholder,
  Spacing,
  Textarea,
} from '@vkontakte/vkui';
import { useEffect, useRef } from 'react';
import { getCatFactQueries } from '../api';

export const CatFactBlock = () => {
  const { data, error, isLoading, refetch } = useQuery(getCatFactQueries);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const { current } = textareaRef;
    if (data && current) {
      const firstWordLength = data.split(' ')[0].length;
      current.focus();
      current.selectionStart = firstWordLength;
    }
  }, [data]);

  return (
    <Group header={<Header mode='primary'>Факты о котах</Header>}>
      <Div>
        <Button
          size='l'
          loading={isLoading}
          onClick={() => refetch()}
          stretched
        >
          Узнать факт
        </Button>
        <Spacing size={20} />
        {error ? (
          <Placeholder>Попробуйте позже</Placeholder>
        ) : (
          <Textarea
            rows={7}
            placeholder='Забавный факт о котах'
            defaultValue={data || ''}
            getRef={textareaRef}
            readOnly={!data}
          />
        )}
      </Div>
    </Group>
  );
};
