 <!-- 
########   ########   ##     ##  ########   ##            ###     ########   ########   
   ##      ##         ###   ###  ##     ##  ##           ## ##       ##      ##         
   ##      ##         #### ####  ##     ##  ##          ##   ##      ##      ##         
   ##      ######     ## ### ##  ########   ##         ##     ##     ##      ######     
   ##      ##         ##     ##  ##         ##         #########     ##      ##         
   ##      ##         ##     ##  ##         ##         ##     ##     ##      ##         
   ##      ########   ##     ##  ##         ########   ##     ##     ##      ########   
 -->
 <template>
	
	<div data-component="views.profile.MyCollection" class="flex justify-center">

		<create-collection></create-collection>

	</div>

</template>


<!-- 
 ######     ######    ########   ####  ########   ########   
##    ##   ##    ##   ##     ##   ##   ##     ##     ##      
##         ##         ##     ##   ##   ##     ##     ##      
 ######    ##         ########    ##   ########      ##      
      ##   ##         ##   ##     ##   ##            ##      
##    ##   ##    ##   ##    ##    ##   ##            ##      
 ######     ######    ##     ##  ####  ##            ##      
 -->
<script>

  import CreateCollection from '@/components/collections/my-collection/form/CreateCollection.vue'
  import { useStore } from 'vuex'
  import { useStorage } from 'vue3-storage'

  export default {

    name: 'MyCollection',
    components: {
      CreateCollection
    },

    setup(){
      const store = useStore();
      const storage = useStorage();
      
      (()=>{
        // load collections
        store.dispatch('contract/myContract/loadContracts', storage.getStorageSync('address'))        
      })();
    }

  }
   
</script>




