export default defineComponent({
  name: "slide-item",
  setup() {
    const slots = useSlots();
    const defaultSlot = slots.default;
    return () =>
      h(
        "div",
        {
          class: "slide-item",
        },
        defaultSlot?.()
      );
  },
});
