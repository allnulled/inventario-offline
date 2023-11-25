
UIScriptComponents.xformfile = Castelog.metodos.un_componente_vue2("xformfile",
  "<div class=\"Component xformfile\">"
 + "    <div class=\"form_group\">"
 + "      <slot></slot>"
 + "      <div>"
 + "        <div style=\"display: none;\">"
 + "          <input"
 + "            ref=\"fichero\""
 + "            class=\"text_input\""
 + "            type=\"file\""
 + "            :name=\"name\""
 + "            :accept=\"inputAccept\""
 + "            v-on:change=\"al_cambiar_fichero\" />"
 + "        </div>"
 + "        <span class=\"cuadro_de_fichero\">"
 + "          <button v-on:click=\"abrir_entrada_de_fichero\">Seleccionar fichero</button>"
 + "          <span>{{ ruta_de_fichero ? ruta_de_fichero : 'No se ha seleccionado ningún fichero.' }}</span>"
 + "        </span>"
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
inputAccept:{ type:String,
default:function() {try {
return "image/*";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
console.log('[DEBUG]', "xformfile.data");
return { fichero_seleccionado:undefined,
ruta_de_fichero:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ obtener_fichero_seleccionado() {try {
console.log('[DEBUG]', "xformfile.obtener_fichero_seleccionado");
return this.fichero_seleccionado;
} catch(error) {
console.log(error);
throw error;
}

},
abrir_entrada_de_fichero() {try {
console.log('[DEBUG]', "xformfile.abrir_entrada_de_fichero");
this.$refs.fichero.click(  );
} catch(error) {
console.log(error);
throw error;
}

},
al_cambiar_fichero( evento ) {try {
console.log('[DEBUG]', "xformfile.al_cambiar_fichero");
const fichero = evento.target.files[ 0 ];
this.ruta_de_fichero = fichero.name;
this.fichero_seleccionado = fichero;
} catch(error) {
console.log(error);
throw error;
}

}
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
mounted() {try {
console.log('[DEBUG]', "xformfile.mounted");
} catch(error) {
console.log(error);
throw error;
}

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