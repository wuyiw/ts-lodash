import _ from 'lodash'
import Vue from 'vue'

const picked = _({} as any).pick(['foo', 'bar', 'baz']).value()

export default Vue.extend({
  data () {
    return {
      pickedWithLongName: picked,
    }
  },
  methods: {
    logPicked () {
      this.pickedWithLongName
    }
  },
})
