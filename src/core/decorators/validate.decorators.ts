import Validator from '@/core/validators';

// export const ValidateController = <T extends Validator>(callBack: { new(): T }) => {
//   return (target: any, props: string, descriptor: PropertyDescriptor) => {
//     // console.log('===>>>', target, props, descriptor)
//     let original = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       const validator = new callBack();
//       console.log('args', args)
//       validator.validate(args[1]);
//       console.log('validator', validator)
//       return original.apply(this, args);
//     }
//   }
// }

export const Validate = <T extends Validator>(callBack: { new(): T }) => {
  return (target: any, props: string, descriptor: PropertyDescriptor) => {
    // console.log('===>>>', target, props, descriptor)
    let original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const validator = new callBack();
      // console.log('args', args)
      validator.validate(args[1]);
      // console.log('validator', validator)
      return original.apply(this, args);
    }
  }
}
