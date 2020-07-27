import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';
import {useForm} from "../useForm"

// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomer = () => {
  const [addUser, {data}] = useMutation(mutationCreateAccount);
  const {form, handleChange} = useForm({
    name: '',
    username: '',
    password: ''
  });

  const save = () => {
    addUser({
      variables: {
        account: form
      }
    })
  };

  return {
    handleChange,
    save,
    createdAccount: data && data.createAccount
  }
};