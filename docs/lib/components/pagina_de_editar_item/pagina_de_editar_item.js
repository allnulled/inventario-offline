
window.PaginaDeEditarItem = Castelog.metodos.un_componente_vue2("PaginaDeEditarItem",
  "<div class=\"PaginaDeEditarItem Component\">"
 + "    <xtitle>Página de editar ítem</xtitle>"
 + "    <xbreadcrumb>"
 + "      <xlink href=\"#/\">Inicio</xlink>"
 + "      <span> » </span>"
 + "      <xlink :href=\"'#/ver/item/' + $route.params.id_item\">Ver ítem</xlink>"
 + "      <span> » </span>"
 + "      <span>Editar ítem</span>"
 + "    </xbreadcrumb>"
 + "    <xpanel v-if=\"item\">"
 + "      <xform>"
 + "        <div class=\"xformfield\">"
 + "          <div class=\"form_group\">"
 + "            <div>Nombre del ítem:</div>"
 + "            <div ref=\"nombre\">"
 + "              <input"
 + "                class=\"text_input\""
 + "                type=\"text\""
 + "                v-model=\"item.nombre\" />"
 + "            </div>"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"xformtext\">"
 + "          <div class=\"form_group\">"
 + "            <div>Descripción del ítem:</div>"
 + "            <div ref=\"descripcion\">"
 + "              <textarea"
 + "                class=\"text_input\""
 + "                v-model=\"item.descripcion\"></textarea>"
 + "            </div>"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"xformfile\">"
 + "          <div class=\"form_group\">"
 + "            <div>Imagen del ítem:</div>"
 + "            <span class=\"cuadro_de_fichero\">"
 + "              <button v-on:click=\"abrir_entrada_de_fichero\">Seleccionar fichero</button>"
 + "              <span>{{ ruta_de_fichero ? ruta_de_fichero : 'No se ha seleccionado ningún fichero.' }}</span>"
 + "            </span>"
 + "            <div style=\"display: none;\">"
 + "              <div ref=\"fichero\">"
 + "                <input"
 + "                  class=\"text_input\""
 + "                  ref=\"imagen_del_item\""
 + "                  type=\"file\""
 + "                  accept=\"image/*\""
 + "                  v-on:change=\"al_cambiar_fichero\" />"
 + "              </div>"
 + "            </div>"
 + "          </div>"
 + "        </div>"
 + "      </xform>"
 + "    </xpanel>"
 + "    <xlayoutnopaddingtop style=\"text-align: right;\">"
 + "      <span v-on:click=\"guardar_item\">"
 + "        <xbutton>Guardar ítem</xbutton>"
 + "      </span>"
 + "    </xlayoutnopaddingtop>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeEditarItem.data");
return { nombre_del_item:undefined,
descripcion_del_item:undefined,
ruta_de_fichero:undefined,
fichero_seleccionado:undefined,
item:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ abrir_entrada_de_fichero() {try {
console.log('[DEBUG]', "PaginaDeEditarItem.abrir_entrada_de_fichero");
this.$refs.imagen_del_item.click(  );
} catch(error) {
this.root.gestionar_error( error );}
},
al_cambiar_fichero( evento ) {try {
console.log('[DEBUG]', "PaginaDeEditarItem.al_cambiar_fichero");
const fichero = evento.target.files[ 0 ];
this.ruta_de_fichero = fichero.name;
this.fichero_seleccionado = fichero;
} catch(error) {
this.root.gestionar_error( error );}
},
async guardar_item() {try {
console.log('[DEBUG]', "PaginaDeEditarItem.guardar_item");
const nombre = this.$refs.nombre.querySelector( "input" ).value;
const descripcion = this.$refs.descripcion.querySelector( "textarea" ).value;
const imagen_fichero = (await this.fichero_seleccionado);
const actualizado_en = new Date(  );
let imagen = undefined;
if((!(typeof imagen_fichero === 'undefined'))) {
imagen = (await this.root.leer_fichero_como_url( imagen_fichero ));
}
const db = (await this.root.obtener_conexion(  ));
const valor = { nombre,
descripcion,
actualizado_en
};
if((!(typeof imagen === 'undefined'))) {
valor.imagen = imagen;
}
const respuesta_actualizar = (await db.update( "item",
this.item.id,
valor ));
this.$router.history.push( "/ver/item/" + this.item.id );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_item() {try {
console.log('[DEBUG]', "PaginaDeEditarItem.obtener_item");
const db = (await this.root.obtener_conexion(  ));
const items = (await db.select( "item",
( item ) => {try {
return item.id === parseInt( this.$route.params.id_item );
} catch(error) {
console.log(error);
throw error;
}

} ));
this.item = items[ 0 ];
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
async mounted() {try {
console.log('[DEBUG]', "PaginaDeEditarItem.mounted");
(await this.obtener_item(  ));
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