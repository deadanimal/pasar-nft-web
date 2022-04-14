<template>
	
	<div class="accordion mt-4" id="accordionExample">
	    
	    <div class="accordion-item bg-white border border-gray-200">
	        <h2 class="accordion-header mb-0" id="headingOne">
	            <button
	                class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none flex justify-between flex justify-between"
	                type="button"
	                data-bs-toggle="collapse"
	                data-bs-target="#collapseOne"
	                aria-expanded="true"
	                aria-controls="collapseOne"
	            >

	                <p>Description </p>
	                <ChevronUpIcon @click="toggleAccordionVisible(0)" v-if="accordion.states[0].visible" :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
	                <ChevronDownIcon @click="toggleAccordionVisible(0)" v-if="!accordion.states[0].visible" :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />


	            </button>
	        </h2>
	        <div id="collapseOne" v-if="accordion.states[0].visible" class="accordion-collapse collapse bgc-sky-30 border-t show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
	            <div class="accordion-body py-4 px-5">
	                Created by {{ collection.author }}
	            </div>
	        </div>
	    </div>
	    <div class="accordion-item bg-white border border-gray-200">
	        <h2 class="accordion-header mb-0" id="headingTwo">
	            <button
	                class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none flex justify-between"
	                type="button"
	                data-bs-toggle="collapse"
	                data-bs-target="#collapseTwo"
	                aria-expanded="false"
	                aria-controls="collapseTwo"
	            >
	                <p>About</p>
	                <ChevronUpIcon @click="toggleAccordionVisible(1)" v-if="accordion.states[1].visible" :class="['ml-2 h-5 w-5 group-hover:text-gray-500']"/>
	                <ChevronDownIcon @click="toggleAccordionVisible(1)" v-if="!accordion.states[1].visible" :class="['ml-2 h-5 w-5 group-hover:text-gray-500']"/>
	            </button>
	        </h2>
	        <div id="collapseTwo" v-if="accordion.states[1].visible" class="accordion-collapse collapse bgc-sky-30 border-t" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
	            <div class="accordion-body py-4 px-5">
	                Commodo minim labore dolore sunt ullamco esse qui fugiat officia in incididunt do aliqua cupidatat sed fugiat voluptate laboris deserunt elit cupidatat aute duis ullamco laboris anim ea reprehenderit fugiat amet.
	            </div>
	        </div>
	    </div>
	    <div class="accordion-item bg-white border border-gray-200">
	        <h2 class="accordion-header mb-0" id="headingThree">
	            <button
	                class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none flex justify-between"
	                type="button"
	                data-bs-toggle="collapse"
	                data-bs-target="#collapseThree"
	                aria-expanded="false"
	                aria-controls="collapseThree"
	            >
	                <p>Details</p>
	                <ChevronUpIcon @click="toggleAccordionVisible(2)" v-if="accordion.states[2].visible" :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
	                <ChevronDownIcon @click="toggleAccordionVisible(2)" v-if="!accordion.states[2].visible" :class="['ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
	            </button>
	        </h2>
	        <div id="collapseThree" v-if="accordion.states[2].visible" class="accordion-collapse collapse bgc-sky-30 border-t" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
	            <div class="accordion-body py-4 px-5">
	                Lorem ipsum aliqua adipisicing enim velit cillum sit incididunt mollit duis eu sint dolor laborum minim fugiat cillum voluptate deserunt pariatur ex sed in nostrud anim sed.
	            </div>
	        </div>
	    </div>
	</div>


</template>

<script>

	import { reactive } from 'vue'

	import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/solid'
	
	export default {
		props: ['collection', 'item'],

		components: {
			ChevronUpIcon,
			ChevronDownIcon			
		},

		setup(){

			const accordion = reactive({
				states: [
					{
						visible: false
					},
					{
						visible: false
					},
					{
						visible: false
					}
				]
			})

			const toggleAccordionVisible = (index) =>{
				accordion.states[index].visible = !accordion.states[index].visible
			}

			return {
				accordion,
				toggleAccordionVisible
			}

		}

	}

</script>