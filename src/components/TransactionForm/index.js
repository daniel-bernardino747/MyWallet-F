import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { newMovement } from '../../helpers/movementHelpers';
import * as s from './style';

export default function TransactionForm({ isDeposit }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  async function sendTransaction(data) {
    return new Promise(() => {
      newMovement(data, isDeposit)
        .then((sucess) => {
          if (sucess) setTimeout(() => (navigate('/')), 1500);
        });
    });
  }

  const notSubmitting = () => (isDeposit ? 'Salvar Entrada' : 'Salvar Saída');

  return (
    <s.Forms onSubmit={handleSubmit(sendTransaction)}>

      <s.Label label="id-value">
        <s.InputNumber
          error={errors?.value}
          text="Valor"
          step="any"
          {...register('value', { required: true })}
        />
        {errors?.value?.type === 'required' && (
          <p>Value is required.</p>
        )}
      </s.Label>
      <s.Label label="id-description">
        <s.Input
          error={errors?.description}
          text="Descrição"
          {...register('description', { required: true })}
        />
        {errors?.description?.type === 'required' && (
          <p>Description is required.</p>
        )}
      </s.Label>
      <s.BoxButtons>
        <s.ButtonExit disabled={isSubmitting} value="Voltar" onClick={() => navigate(-1)} />
        <s.ButtonSubmit disabled={isSubmitting} value={isSubmitting ? 'Carregando...' : notSubmitting()} />
      </s.BoxButtons>
    </s.Forms>
  );
}

TransactionForm.propTypes = {
  isDeposit: PropTypes.bool,
};
