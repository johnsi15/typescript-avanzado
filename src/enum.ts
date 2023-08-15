export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

// https://www.typescriptlang.org/docs/handbook/enums.html

export type User = {
  username: string
  role: ROLES
}

const andreyUser: User = {
  username: 'jandrey',
  role: ROLES.CUSTOMER
}

console.log(andreyUser)
