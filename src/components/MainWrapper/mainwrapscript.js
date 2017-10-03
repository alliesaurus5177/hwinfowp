//import machine? 
import MachineTable from '@/components/MachineTable/MachineTable'

export default {
  name: 'main-wrapper',
  components:{
  	'machine-table': MachineTable,
  },
  data () {
    return {
      msg: 'I\'m the main wrapper component'
    }
  }
}