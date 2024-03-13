import * as yup from 'yup';

export const ageCheckSchema = yup
  .object({
    firstName: yup
      .string()
      .required('Обязательное поле')
      .matches(/^[a-zA-Z]+$/, 'В поле должны быть только латинские буквы'),
  })
  .required();

export type AgeCheckSchemaFormData = yup.InferType<typeof ageCheckSchema>;
