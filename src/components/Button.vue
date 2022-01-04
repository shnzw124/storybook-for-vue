<template>
  <button
    type="button"
    :class="['button', { primary, secondary }, size]"
    @click="onClick"
    :style="style"
    v-text="label"
  />
</template>

<script>
export default {
  // props と event の情報を追記する *JSDOC形式
  props: {
    /**
     * ボタン内に表示するテキスト
     */
    label: {
      type: String,
      required: true
    },
    /**
     * プライマリーカラーを適用するか
     */
    primary: {
      type: Boolean,
      default: false
    },
    /**
     * セカンダリーカラーを適用するか
     */
    secondary: {
      type: Boolean,
      default: false
    },
    /**
     * ボタンのサイズ
     * @values small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String,
      required: false
    }
  },
  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },
  methods: {
    onClick() {
      /**
       * ボタンクリック時のイベント
       * @event onClick
       * @type {object}
       */
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
  // 変更なし
</style>
