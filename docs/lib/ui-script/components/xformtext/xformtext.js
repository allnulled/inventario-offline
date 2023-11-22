
UIScriptComponents.xformtext = Castelog.metodos.un_componente_vue2("xformtext",
  "<div class=\"Component xformtext\">"
 + "    <div class=\"form_group\">"
 + "      <slot></slot>"
 + "      <div>"
 + "        <textarea class=\"text_input\" :value=\"inputValue\"></textarea>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ inputValue:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);