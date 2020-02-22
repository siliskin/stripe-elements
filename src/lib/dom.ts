import { curry } from '@typed/curry';
import { render } from 'lit-html';
import type { TemplateResult } from 'lit-element';

/**
 * Remove an element from the DOM
 * @param  el element to remove
 */
/* istanbul ignore next */
export const remove = (el: ChildNode): void =>
  el?.remove();

export const appendTemplate = curry(
  function appendTemplate(template: TemplateResult, target: Node) {
    const tmp = document.createElement('div');
    render(template, tmp);
    const { firstElementChild } = tmp;
    target.appendChild(firstElementChild);
    tmp.remove();
    return firstElementChild;
  }
);

export const mapProps:
  <O extends object, M extends Record<
    keyof O,
    (...args: O[keyof O][]) => unknown
  >>(mapping: M) =>
    <O>(obj: O) => O & { [P in keyof M]?: ReturnType<M[P]> } =
  mapping => obj =>
    Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) =>
          key in mapping
            ? [key, mapping[key](value)]
            : [key, value])
        );
