
export function isPureString(value: any) {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  try {
    return !format.test(value);
  }
  catch (e) {
    return false;
  }
}

export const isPureStringAllowSpace = (value: any) => {
  const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  try {
    return !format.test(value);
  }
  catch (e) {
    return false;
  }
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



