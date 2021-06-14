import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/page1'
import HelloWorld from '@/components/HelloWorld'
import def from "@/components/def"
import page1_page1 from "@/components/page1_page1"
import page1_page1_page1 from "@/components/page1_page1_page1"
import page1_page1_page2 from "@/components/page1_page1_page2"
import page1_page1_page3 from "@/components/page1_page1_page3"
import page1_page1_page4 from "@/components/page1_page1_page4"
import page1_page1_page5 from "@/components/page1_page1_page5"
import page1_page2_page1 from "@/components/page1_page2_page1"
	import page1_page2_page2 from "@/components/page1_page2_page2"
import page1_page2 from "@/components/page1_page2"
import page2 from "@/components/page2"
import page4 from "@/components/page4"
	import page3 from "@/components/page3"
	import page4_page1 from "@/components/page4_page1"
	import page4_page1_page2 from "@/components/page4_page1_page2"
	import page4_page1_page3 from "@/components/page4_page1_page3"
	import page4_page1_page5 from "@/components/page4_page1_page5"
	import page4_page1_page6 from "@/components/page4_page1_page6"	
	import page4_page1_page8 from "@/components/page4_page1_page8"
	import page4_page1_page9 from "@/components/page4_page1_page9"
import page4_page1_page10 from "@/components/page4_page1_page10"
	import page4_page1_page11 from "@/components/page4_page1_page11"
	import page4_page1_page1 from "@/components/page4_page1_page1"	
import page4_page1_page7 from "@/components/page4_page1_page7"	
	import page4_page1_page4 from "@/components/page4_page1_page4"
import page4_page2_page1 from "@/components/page4_page2_page1"	
import page4_page2_page2 from "@/components/page4_page2_page2"
import page4_page2_page3 from "@/components/page4_page2_page3"
import page4_page2_page4 from "@/components/page4_page2_page4"
	import page4_page2 from "@/components/page4_page2"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: def
    },
    	      {
      path: '/page1',
      component: page1
    },
    	      {
      path: '/page4',
      component: page4
    },
    	      	      {
      path: '/page4_page1_page10',
      component: page4_page1_page10
      },
{
      path: '/page4_page1',
      component: page4_page1
      },
      	  {
      path: '/page4_page2',
      component: page4_page2
      },
      {
    	        path: '/page4_page2_page1',
      component: page4_page2_page1
    },
    				    	        {path: '/page4_page1_page1',
      component: page4_page1_page1
    },
    				    				    	        {path: '/page4_page1_page4',
      component: page4_page1_page4
    },
    				{
    	        path: '/page1_page1_page3',
      component: page1_page1_page3
    },
    				    				{
    	        path: '/page1_page1_page4',
      component: page1_page1_page4
    },
    				    				    				{
    	        path: '/page1_page2_page1',
      component: page1_page2_page1
    },
    				    	       ,{
    				 path: '/page1_page2_page2',
      component: page1_page2_page2
    },
    					 {
    				 path: '/page3',
      component: page3
    },
    				    	        {path: '/page4_page2_page2',
      component: page4_page2_page2
    },
    				    				    	        {path: '/page4_page2_page3',
      component: page4_page2_page3
    },
    				   				    				    	        {path: '/page4_page2_page4',
      component: page4_page2_page4
    },
    	      
    	          				   				    				    	        {path: '/page4_page1_page9',
      component: page4_page1_page9
    },	
    																					
{path: '/page4_page1_page8',
      component: page4_page1_page8
    },	
    {path: '/page4_page1_page2',
      component: page4_page1_page2
    },	
    {path: '/page4_page1_page3',
      component: page4_page1_page3
    },	
    {path: '/page4_page1_page11',
      component: page4_page1_page11
    },	
    {path: '/page4_page1_page6',
      component: page4_page1_page6
    },	
    																					
    	      	      	      {
      path: '/page4_page1_page7',
      component: page4_page1_page7
    },
    	      	      	      	      {
      path: '/page4_page1_page5',
      component: page4_page1_page5
    },
    	      	      {
      path: '/page1_page1',
      component: page1_page1
    },
    	      	      	      {
      path: '/page1_page1_page1',
      component: page1_page1_page1
    },{
      path: '/page1_page1_page2',
      component: page1_page1_page2
    },
    	  {
      path: '/page1_page1_page5',
      component: page1_page1_page5
    },
    	      	      	      {
      path: '/page1_page2',
      component: page1_page2
    },
    {
      path: '/page2',
      component: page2
    }
  ]
})