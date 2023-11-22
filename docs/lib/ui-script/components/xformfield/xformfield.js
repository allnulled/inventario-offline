
UIScriptComponents.xformfield = Castelog.metodos.un_componente_vue2("xformfield",
  "<div class=\"Component xformfield\">"
 + "    <div class=\"form_group\">"
 + "      <slot></slot>"
 + "      <div>"
 + "        <input class=\"text_input\" :type=\"inputType\" :name=\"name\" :value=\"inputValue\" />"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ name:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
inputType:{ type:String,
default:function() {try {
return "text";
} catch(error) {
console.log(error);
throw error;
}

}
},
inputValue:{ type:String,
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