export const taxCalculator = income => {
  if (income <= 18200) {
    return 0
  } else if (income >= 18201 && income <= 37000) {
    return income * 0.19
  } else if (income >= 37001 && income <= 90000) {
    return 3572 + income * 0.325
  } else if (income >= 90001 && income <= 180000) {
    return 20797 + income * 0.37
  } else {
    return 54097 + income * 0.45
  }
}

export const superCalculator = income => {
  return income * 0.105
}
