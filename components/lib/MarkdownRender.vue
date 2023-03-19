<script>
import { ref, h } from 'vue'

export default {
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
  setup(props, { refs }) {
    const html = ref(props.markdown)

    return {
      html,
    }
  },
  render() {
    return [
      h('div', {
        innerHTML: this.html,
      }),
    ];
  },
}
</script>
