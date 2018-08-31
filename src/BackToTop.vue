<template>
  <transition name="back-to-top-fade">
    <div class="vue-back-to-top" :style="`bottom:${this.bottom};right:${this.right};`" v-show="visible" @click="backToTop">
      <slot>
        <div class="default">
          <span>
            {{ text }}
          </span>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'BackToTop',
  props: {
    text: {
      type: String,
      default: 'Voltar ao topo'
    },
    visibleoffset: {
      type: [String, Number],
      default: 600
    },
    right: {
      type: String,
      default: '30px',
    },
    bottom: {
      type: String,
      default: '40px',
    },
    backToTop: {
      type: Element,
      default: window,
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    this.element.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        this.element.requestAnimationFrame(this.element.smoothscroll)
        this.element.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    this.element.addEventListener('scroll', this.catchScroll)
  },
  destroyed () {
    this.element.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    /**
     * Catch element scroll event 
     * @return {void}
     */
    catchScroll () {
      this.visible = (this.element.pageYOffset > parseInt(this.visibleoffset))
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop () {
      this.element.smoothscroll()
      this.$emit('scrolled');
    }
  }
}
</script>
<style src="./styles.css"></style>
