export const ChangeTheme = (e) => {
  localStorage.setItem('TYPE_OF_THEME', e.target.value)
  window.location.reload()
}
