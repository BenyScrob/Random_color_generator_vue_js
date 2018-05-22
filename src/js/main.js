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
        fiindName: '',
        colors: [
            {
                hex:"#a5a1b8",
            },
            {
                hex: "#490836",
            },
            {
                hex:"#782190",
            },
            {
                hex: "#61e080",
            },
            {
                hex:"#5e8f24",
            },
            {
                hex:"#10f64f",
            }, 
            {
                hex:"#bb54e5",
            },
            {
                hex:"#09114e",
            },
            {
                hex: "#c7f3b9",
            },
            {
                hex: "#da1399",
            },
            {
                hex:"#ed5fe2",
            },  
             {
                hex:"#29c84c",
            },

            {
                hex: "#a3a3a8",
            },
            {
                hex:"#691a2f"
            },
        ],
        mycolor:" ",
    },

    computed: {
        search: function() {
            let self = this;

            return this.colors.filter(function(color) {
                let parts = self.fiindName.trim().split(" ");

                for(let part of parts) {
                    let searchRegex = new RegExp(part, 'i');

                    if(!(
                        searchRegex.test(color.hex) 
                    )) {
                        return false;
                    }
                }

                return true;
            })
        }
    },
    methods: {
        generator: function(event){
            this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            document.body.style.background = this.mycolor
        }
    }
    
});