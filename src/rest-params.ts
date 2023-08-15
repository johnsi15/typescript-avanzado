import { User, ROLES } from './enum' // tener en cuenta que me traigo los console.log

const currentUser: User = {
  username: 'Andrey',
  role: ROLES.ADMIN
}

export const checkRole = (...role: string[]) => { // rest params
  if (role.includes(currentUser.role)) {
    return true
  }
  return false
}

const rta = checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
console.log(rta)


let sum = (...nums: number[]) => {
  let incremental: number = 0
  nums.forEach(number => incremental += number)

  return incremental
}

console.log(sum(1, 2))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
