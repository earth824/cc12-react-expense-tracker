import { useState } from 'react';
import CreateTransactionButton from './CreateTransactionButton';
import CreateTransactionForm from './CreateTransactionForm';

function CreateTransaction() {
  const [isShowCreateForm, setIsShowCreateForm] = useState(false);
  return (
    <>
      {!isShowCreateForm ? (
        <CreateTransactionButton onClick={() => setIsShowCreateForm(true)} />
      ) : (
        <CreateTransactionForm onCloseForm={() => setIsShowCreateForm(false)} />
      )}
    </>
  );
}

export default CreateTransaction;
