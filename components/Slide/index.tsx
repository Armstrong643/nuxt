import type { StyleValue } from "vue"

export default defineComponent({
  name: 'slide',
  props: {

  },
  emits: {

  },
  setup() {
    const currentIndex = ref(0)
    const $slots = useSlots()
    const defaultSlot = $slots.default
    let children: VNode[] = []
    if (defaultSlot) {
      children = defaultSlot().filter(vnode => {
        return vnode.type.name === 'slide-item'
      })
    }
    const style = ref<StyleValue>()
    const slideRef = ref<HTMLDivElement>()
    const wrapperRef = ref<HTMLDivElement>()
    const onIndexChange = (i: number) => {
      currentIndex.value = i
      calcTranslateX()
    }
    const calcTranslateX = () => {
      let x = 0
      let leftWidth = 0
      const index = unref(currentIndex)
      const scrollWidth = slideRef.value!.scrollWidth
      const clientWidth = wrapperRef.value!.clientWidth
      if(scrollWidth > clientWidth){
        children.forEach((child, i) => {
          if(i < index){
            x -= child.el!.clientWidth
          }else{
            leftWidth += child.el!.clientWidth
          }
        })
        if(leftWidth < clientWidth){
          x = clientWidth - scrollWidth
        }
        style.value = {
          transition: 'all linear 0.3s',
          transform: `translateX(${x}px)`
        }
        console.log(leftWidth)
      }else{
        //not translate, just change indec
      }
    }
    return () => (
      <div>
        <div ref={wrapperRef} class="slide-wrapper">
          <div class="slide" ref={slideRef} style={style.value}>{children}</div>
        </div>
        <div class="slide-dots">
          {children.map((c, i) => {
            return <span class={`slide-dot ${currentIndex.value === i ? 'active' : ''}`} key={i} onClick={() => onIndexChange(i)}></span>
          })}
        </div>
      </div>
    )
  },
})