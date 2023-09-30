//Local Storage - adding, removing, getting
export const addDataToLocalStorage = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const removeDataFromLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}
export const getDataFromLocalStorage = (key: string) => {
  const resault = localStorage.getItem(key)
  const data = resault ? JSON.parse(resault) : null
  return data
}
export const clearLocalStorage = () => localStorage.clear()
