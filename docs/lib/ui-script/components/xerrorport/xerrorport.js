
UIScriptComponents.xerrorport = Castelog.metodos.un_componente_vue2("xerrorport",
  "<div class=\"Component xerrorport\">"
 + "    <div v-if=\"root.errors && root.errors.length\" style=\"overflow:scroll;\">"
 + "      <div>"
 + "        <div>"
 + "          <div>"
 + "            <div v-for=\"error, error_index in root.errors\" v-bind:key=\"'error-' + error_index\">"
 + "              <xwindow>"
 + "                <xwindowtitle>{{ error.name }}</xwindowtitle>"
 + "                <xwindowbody>"
 + "                  <xlayout>"
 + "                    <div>{{ error.name }}: {{ error.message }}.</div>"
 + "                    <xcollapsible>"
 + "                      <xcollapsibleitem>Detalles</xcollapsibleitem>"
 + "                      <xparagraph>"
 + "                      {{ error.stack }}"
 + "                      </xparagraph>"
 + "                    </xcollapsible>"
 + "                    <div v-if=\"error.response\">"
 + "                      <div>{{ error.response.data.error.name }}</div>"
 + "                      <div>{{ error.response.data.error.message }}</div>"
 + "                      <div>"
 + "                        <xcollapsible>"
 + "                          <xcollapsibleitem>Detalles</xcollapsibleitem>"
 + "                          <xparagraph>"
 + "                          {{ error.response.data.error.stack }}"
 + "                          </xparagraph>"
 + "                        </xcollapsible>"
 + "                      </div>"
 + "                    </div>"
 + "                    <div style=\"text-align: right;\">"
 + "                      <button v-on:click=\"() => eliminar_error(error_index)\">Aceptar</button>"
 + "                    </div>"
 + "                  </xlayout>"
 + "                </xwindowbody>"
 + "                <xwindowfooter>"
 + "                  <xwindowfooteritem>Error</xwindowfooteritem>"
 + "                </xwindowfooter>"
 + "              </xwindow>"
 + "            </div>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
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
methods:{ eliminar_error( error_index ) {try {
this.root.errors.splice( error_index,
1 );
this.root.$forceUpdate( true );
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