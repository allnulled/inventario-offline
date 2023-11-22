
window.PaginaDeVerAlmacen = Castelog.metodos.un_componente_vue2("PaginaDeVerAlmacen",
  "<div class=\"PaginaDeVerAlmacen Component\">"
 + "    <xtitle>Página de ver almacén</xtitle>"
 + "    <xbreadcrumb>"
 + "      <xlink href=\"#/\">Inicio</xlink>"
 + "      <span> » </span>"
 + "      <span>Ver almacén</span>"
 + "    </xbreadcrumb>"
 + "    <xpanel v-if=\"almacen\">"
 + "      <xlayoutnopaddingtop>"
 + "        <xlabel class=\"formitem\">ID: {{ almacen.id }}</xlabel>"
 + "        <xlabel class=\"formitem\">Nombre: {{ almacen.nombre }}</xlabel>"
 + "        <xlabel class=\"formitem\">Descripción: {{ almacen.descripcion }}</xlabel>"
 + "      </xlayoutnopaddingtop>"
 + "      <xlayoutnopaddingtop style=\"text-align: right;\">"
 + "        <span v-on:click=\"ir_a_editar_almacen\">"
 + "          <xbutton>Ir a editar almacén</xbutton>"
 + "        </span>"
 + "        <span v-on:click=\"eliminar_almacen\">"
 + "          <xbutton>Eliminar almacén</xbutton>"
 + "        </span>"
 + "        <span v-on:click=\"ir_a_crear_item\">"
 + "          <xbutton>Ir a crear ítem</xbutton>"
 + "        </span>"
 + "      </xlayoutnopaddingtop>"
 + "      <xtable v-if=\"items && items.length\">"
 + "        <xtablerow>"
 + "          <xtableheader>ID</xtableheader>"
 + "          <xtableheader>Ítem</xtableheader>"
 + "          <xtableheader>Almacén</xtableheader>"
 + "          <xtableheader>Descripción</xtableheader>"
 + "        </xtablerow>"
 + "        <xtablerow v-for=\"item, item_index in items\" v-bind:key=\"'item-' + item_index\">"
 + "          <xtablecell>"
 + "            <span v-on:click=\"() => ir_a_ver_item(item.id)\">"
 + "              <xbutton>{{ item.id }}</xbutton>"
 + "            </span>"
 + "          </xtablecell>"
 + "          <xtablecell>"
 + "          {{ item.nombre.substr(0,50) }}{{ item.nombre.length > 50 ? '...' : '' }}"
 + "          </xtablecell>"
 + "          <xtablecell>"
 + "          {{ item.id_almacen }}"
 + "          </xtablecell>"
 + "          <xtablecell>"
 + "          {{ item.descripcion.substr(0,50) }}{{ item.descripcion.length > 50 ? '...' : '' }}"
 + "          </xtablecell>"
 + "        </xtablerow>"
 + "      </xtable>"
 + "    </xpanel>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeVerAlmacen.data");
return { almacen:undefined,
items:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async ir_a_ver_item( id_item ) {try {
console.log('[DEBUG]', "PaginaDeVerAlmacen.ir_a_ver_item");
this.$router.history.push( '/ver/item/' + id_item );
} catch(error) {
console.log(error);
throw error;
}

},
async ir_a_crear_item() {try {
console.log('[DEBUG]', "PaginaDeVerAlmacen.ir_a_crear_item");
this.$router.history.push( "/crear/item/de/almacen/" + this.almacen.id );
} catch(error) {
console.log(error);
throw error;
}

},
async ir_a_editar_almacen() {try {
console.log('[DEBUG]', "PaginaDeVerAlmacen.ir_a_editar_almacen");
this.$router.history.push( "/editar/almacen/" + this.almacen.id );
} catch(error) {
console.log(error);
throw error;
}

},
async eliminar_almacen() {try {
console.log('[DEBUG]', "PaginaDeVerAlmacen.eliminar_almacen");
const db = (await this.root.obtener_conexion(  ));
const almacen_id = this.$route.params.id_almacen;
const items_coincidentes = (await db.select( "item",
( item ) => {try {
return item.id_almacen === almacen_id;
} catch(error) {
console.log(error);
throw error;
}

} ));
const confirmacion = this.root.$window.confirm( "¿Seguro que quieres eliminar este almacén? Se eliminarán también " + items_coincidentes.length + " ítems contenidos en este almacén." );
if((!(confirmacion))) {
return;
}
for(let index = 0; index < items_coincidentes.length; index++) {const item = items_coincidentes[ index ];
const item_eliminado = (await db.delete( "item",
parseInt( item.id ) ));}
const almacen_eliminado = (await db.delete( "almacen",
parseInt( almacen_id ) ));
this.$router.history.push( "/" );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_almacen() {try {
console.log('[DEBUG]', "PaginaDeVerAlmacen.obtener_almacen");
const db = (await this.root.obtener_conexion(  ));
const almacen_id = parseInt( this.$route.params.id_almacen );
const almacenes = (await db.select( "almacen",
( almacen ) => {try {
return almacen.id === almacen_id;
} catch(error) {
console.log(error);
throw error;
}

} ));
this.almacen = almacenes[ 0 ];
this.$forceUpdate( true );
} catch(error) {
this.gestionar_error( error,
true );}
},
async obtener_items() {try {
console.log('[DEBUG]', "PaginaDeVerAlmacen.obtener_items");
const db = (await this.root.obtener_conexion(  ));
const almacen_id = parseInt( this.$route.params.id_almacen );
const items = (await db.select( "item",
( item ) => {try {
return parseInt( item.id_almacen ) === almacen_id;
} catch(error) {
console.log(error);
throw error;
}

} ));
this.items = items;
this.$forceUpdate( true );
} catch(error) {
this.gestionar_error( error,
true );}
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
console.log('[DEBUG]', "PaginaDeVerAlmacen.mounted");
(await this.obtener_almacen(  ));
(await this.obtener_items(  ));
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