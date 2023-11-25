
window.PaginaDeCrearItem = Castelog.metodos.un_componente_vue2("PaginaDeCrearItem",
  "<div class=\"PaginaDeCrearItem Component\">"
 + "    <xtitle>Página de crear ítem</xtitle>"
 + "    <xbreadcrumb>"
 + "      <xlink href=\"#/\">Inicio</xlink>"
 + "      <span> » </span>"
 + "      <xlink :href=\"'#/ver/almacen/' + $route.params.id_almacen\">Ver almacén</xlink>"
 + "      <span> » </span>"
 + "      <span>Crear ítem</span>"
 + "    </xbreadcrumb>"
 + "    <xpanel>"
 + "      <xform>"
 + "        <div class=\"xformfield\">"
 + "          <div class=\"form_group\">"
 + "            <div>Nombre del ítem:</div>"
 + "            <div ref=\"nombre\">"
 + "              <input"
 + "                class=\"text_input\""
 + "                type=\"text\""
 + "                v-model=\"nombre_del_item\" />"
 + "            </div>"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"xformtext\">"
 + "          <div class=\"form_group\">"
 + "            <div>Descripción del ítem:</div>"
 + "            <div ref=\"descripcion\">"
 + "              <textarea"
 + "                class=\"text_input\""
 + "                v-model=\"descripcion_del_item\"></textarea>"
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
 + "      <span v-on:click=\"crear_item\">"
 + "        <xbutton>Crear ítem</xbutton>"
 + "      </span>"
 + "    </xlayoutnopaddingtop>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeCrearItem.data");
return { nombre_del_item:undefined,
descripcion_del_item:undefined,
ruta_de_fichero:undefined,
fichero_seleccionado:undefined,
almacen:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ abrir_entrada_de_fichero() {try {
console.log('[DEBUG]', "PaginaDeCrearItem.abrir_entrada_de_fichero");
this.$refs.imagen_del_item.click(  );
} catch(error) {
this.root.gestionar_error( error );}
},
al_cambiar_fichero( evento ) {try {
console.log('[DEBUG]', "PaginaDeCrearItem.al_cambiar_fichero");
const fichero = evento.target.files[ 0 ];
this.ruta_de_fichero = fichero.name;
this.fichero_seleccionado = fichero;
} catch(error) {
this.root.gestionar_error( error );}
},
async crear_item() {try {
console.log('[DEBUG]', "PaginaDeCrearItem.crear_item");
const nombre = this.$refs.nombre.querySelector( "input" ).value;
const descripcion = this.$refs.descripcion.querySelector( "textarea" ).value;
let imagen = undefined;
const fichero_imagen = this.fichero_seleccionado;
if((!(typeof fichero_imagen === 'undefined'))) {
imagen = (await this.root.leer_fichero_como_url( fichero_imagen ));
}
if(nombre.length === 0) {
throw new Error( "Se requiere parámetro «nombre» tener una cantidad mínima de texto" );
}
const db = (await this.root.obtener_conexion(  ));
const id_almacen = (await db.insert( "item",
{ nombre,
descripcion,
imagen,
id_almacen:this.$route.params.id_almacen,
creado_en:new Date(  ),
actualizado_en:new Date(  )
} ));
this.$router.history.push( "/ver/item/" + id_almacen );
} catch(error) {
this.root.gestionar_error( error );}
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