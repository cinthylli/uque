/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      cat_transporte
      cat_energia
      cat_alimentacion
      cat_ahorro
      total_hogar
      cat_empleado
      total_empresa
      aspectos_positivos
      aspectos_negativos
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      cat_transporte
      cat_energia
      cat_alimentacion
      cat_ahorro
      total_hogar
      cat_empleado
      total_empresa
      aspectos_positivos
      aspectos_negativos
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      cat_transporte
      cat_energia
      cat_alimentacion
      cat_ahorro
      total_hogar
      cat_empleado
      total_empresa
      aspectos_positivos
      aspectos_negativos
      createdAt
      updatedAt
    }
  }
`;
