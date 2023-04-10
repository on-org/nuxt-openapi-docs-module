<script>
export default {
  props: {
    html: {
      type: String,
      required: true,
    },
  },
  render(h) {
    return [
      h('div', {
        innerHTML: this.html,
      }),
    ];
  },
}
</script>
