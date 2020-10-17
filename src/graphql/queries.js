/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
