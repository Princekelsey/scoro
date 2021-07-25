import { Directive } from "vue";

interface IClickElement extends Element {
  clickOutsideEvent: (event: Event) => void;
}

type ClickValue = () => void;

const clickOutside: Directive<IClickElement, ClickValue> = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event: Event) => {
      // here I check that click was outside the el and his children
      if (!(el === event.target || el.contains(event.target as Element))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

export default clickOutside;
