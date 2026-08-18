export function readInputString(e: globalThis.CustomEvent): string {
  const target = e.detail?.target as HTMLInputElement | HTMLSelectElement | undefined
  return target?.value ?? ''
}

export function readInputChecked(e: globalThis.CustomEvent): boolean {
  const target = e.detail?.target as HTMLInputElement | undefined
  return Boolean(target?.checked)
}
