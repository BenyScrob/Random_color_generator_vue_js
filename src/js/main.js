import Vue from 'vue';
const $=require('jquery');
global.$=global.jQuery=$;
require('../scss/main.css');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');

var beni = new Vue({
    el: '#app',
    data: {
        text:'Search color',
        fiindColor: '',
        colors: [
            "#a5a1b8",
            "#490836",
            "#782190",
            "#61e080",
            "#5e8f24",
            "#10f64f",
            "#bb54e5",
            "#09114e",
            "#c7f3b9",
            "#da1399",
            "#ed5fe2",  
            "#29c84c",
            "#a3a3a8",
            "#691a2f"

        ],
    },

    computed: {
        search: function() {
            let self = this;

            return this.colors.filter(function(color) 
            {
                let parts = self.fiindColor.trim().split(" ");

                for(let part of parts) 
                {
                    let searchRegex = new RegExp(part, 'i');

                    if(!(searchRegex.test(color))) 
                    {
                        return false;
                    }
                }

                return true;
            })
        }
    },
    methods: {
        generator: function(event){
            let mycolor=[];

            for(let i=0; i < this.colors.length; i++)
            {
                mycolor.push( '#'+ Math.floor(Math.random()*0xFFFFFF).toString(16));
            }
            this.colors=mycolor; 
        }
    }
    
});