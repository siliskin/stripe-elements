function wrap(f) {
  return (_target: Object, _property: string, descriptor: TypedPropertyDescriptor<any>) => {
    const original = descriptor.value;
    descriptor.value = f(original);
    return descriptor;
  };
}

export const stripeMethod = wrap(function(f) {
  const { name } = f;
  return async function(...args: unknown[]) {
    if (!this.stripe) throw new Error(`<${this.constructor.is}>: Stripe must be initialized before calling ${name}.`);
    return f.call(this, ...args)
      .then(this.handleResponse);
  };
});
