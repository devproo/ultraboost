<template>
    <h1>{{title}} </h1>
    <p>Welcome...</p>
    
    <teleport to='.modals' v-if="showModal"> 
      <Modal   theme='' @close='toggleModal'>

        <template v-slot:links>
          <a href="a">sign up  </a>
          <a href="a"> more info</a>
        </template>

        <h1>My life start</h1>
        <p>I do my best to succeed</p>
      </Modal>
    </teleport>
    <teleport to='.modals' v-if="showModalTwo"> 
      <Modal    @close='toggleModalTwo'>
        <h1>do it</h1>
        <p>gonna succeed</p>
      </Modal>
    </teleport>
        
        



   <button @click.alt="toggleModal">open modal(alt)</button>
   <button @click="toggleModalTwo">open modal</button>
   <!-- <input type='text' ref="name">
    <button onclick='handleClick'>click me</button> -->
 
</template>

<script>
  import Modal from './components/Modal.vue'


export default {
  name: 'App',
  components: { Modal },
  data () {
    return {
        title: 'My First Vue App :) ',
       
        showModal: false,
        showModalTwo: false

    }
   },
   methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()


    },
    toggleModal() {

      this.showModal = !this.showModal
    },
    toggleModalTwo() {

this.showModalTwo = !this.showModalTwo
}



   }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
border-bottom: 1px solid #ddd;
display: inline-block;
padding-bottom: 10px;

}
</style>
