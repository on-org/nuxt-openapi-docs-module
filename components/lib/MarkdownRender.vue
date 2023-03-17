<script>
import { marked } from 'marked'
import { ref, onMounted, h } from 'vue'
import DOMPurify from "isomorphic-dompurify";

export default {
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
  setup(props, { refs }) {
    const html = ref(DOMPurify.sanitize(marked(props.markdown)))

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
