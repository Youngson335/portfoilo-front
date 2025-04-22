import { gsap } from "gsap";
import { Directive, DirectiveBinding } from "vue";

interface StaggeredShowOptions {
  delay?: number;
  selector?: string;
  yOffset?: number;
  duration?: number;
}

const animation: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<StaggeredShowOptions>) {
    const options: StaggeredShowOptions = {
      delay: 0.3,
      selector: ".order-item",
      yOffset: 20,
      duration: 0.5,
      ...binding.value,
    };

    const children = el.querySelectorAll<HTMLElement>(options.selector!);

    gsap.from(children, {
      opacity: 0,
      y: options.yOffset,
      duration: options.duration,
      stagger: options.delay,
      ease: "power2.out",
    });
  },
};

export default animation;
