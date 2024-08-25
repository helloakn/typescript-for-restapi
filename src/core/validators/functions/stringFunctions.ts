
export function isPureString(value: any) {
  console.error('isPureString', value)
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return !format.test(value);
}

export const isPureStringAllowSpace = (value: any) => {
  const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return !format.test(value);
}

export function maxLength(value: any, max: number) {
  try {
    return value.length <= max;
  }
  catch (e) {
    return false;
  }
}

export function minLength(value: any, min: number) {
  try {
    return value.length >= min;
  }
  catch (e) {
    return false;
  }

}



