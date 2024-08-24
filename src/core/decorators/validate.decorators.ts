import Validator from '@/core/validators';

export const Validate = <T extends Validator>(callBack: { new(): T }) => {
  return (target: any, props: string, descriptor: PropertyDescriptor) => {
    let original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const validator = new callBack();
      validator.validate(args[1]);
      return original.apply(this, args);
    }
  }
}
