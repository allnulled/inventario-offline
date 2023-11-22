
window.PaginaDeVerItem = Castelog.metodos.un_componente_vue2("PaginaDeVerItem",
  "<div class=\"PaginaDeVerItem Component\">"
 + "    <xtitle>Página de ver ítem</xtitle>"
 + "    <xbreadcrumb v-if=\"item\">"
 + "      <xlink href=\"#/\">Inicio</xlink>"
 + "      <span> » </span>"
 + "      <xlink :href=\"'#/ver/almacen/' + item.id_almacen\">Ver almacén</xlink>"
 + "      <span> » </span>"
 + "      <span>Ver ítem</span>"
 + "    </xbreadcrumb>"
 + "    <xbreadcrumb v-else=\"\">"
 + "      <xlink href=\"#/\">Inicio</xlink>"
 + "      <span> » </span>"
 + "      <span>Ver ítem</span>"
 + "    </xbreadcrumb>"
 + "    <xpanel v-if=\"item\">"
 + "      <xlayoutnopaddingtop>"
 + "        <xlabel class=\"formitem\">ID: {{ item.id }}</xlabel>"
 + "        <xlabel class=\"formitem\">Nombre: {{ item.nombre }}</xlabel>"
 + "        <xlabel class=\"formitem\">Descripción: {{ item.descripcion }}</xlabel>"
 + "        <xlabel class=\"formitem\" v-if=\"item.imagen\">"
 + "          <div>Imagen: {{ (item.imagen.length / 1000000).toFixed(2) }}MB</div>"
 + "          <img :src=\"item.imagen\" />"
 + "        </xlabel>"
 + "      </xlayoutnopaddingtop>"
 + "      <xlayoutnopaddingtop style=\"text-align: right;\">"
 + "        <span v-on:click=\"ir_a_editar_item\">"
 + "          <xbutton>Ir a editar ítem</xbutton>"
 + "        </span>"
 + "        <span v-on:click=\"eliminar_item\">"
 + "          <xbutton>Eliminar ítem</xbutton>"
 + "        </span>"
 + "      </xlayoutnopaddingtop>"
 + "    </xpanel>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeVerItem.data");
return { item:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async ir_a_editar_item() {try {
console.log('[DEBUG]', "PaginaDeVerItem.ir_a_editar_item");
this.$router.history.push( "/editar/item/" + this.item.id );
} catch(error) {
console.log(error);
throw error;
}

},
async eliminar_item() {try {
console.log('[DEBUG]', "PaginaDeVerItem.eliminar_item");
const confirmacion = this.root.$window.confirm( "¿Estás seguro que quieres eliminar ítem " + this.item.id + "?" );
if((!(confirmacion))) {
return;
}
const db = (await this.root.obtener_conexion(  ));
const item_id = parseInt( this.$route.params.id_item );
const item_eliminado = (await db.delete( "item",
item_id ));
this.$router.history.push( "/ver/almacen/" + this.item.id_almacen );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_item() {try {
console.log('[DEBUG]', "PaginaDeVerItem.obtener_item");
const db = (await this.root.obtener_conexion(  ));
const item_id = parseInt( this.$route.params.id_item );
const itemes = (await db.select( "item",
( item ) => {try {
return item.id === item_id;
} catch(error) {
console.log(error);
throw error;
}

} ));
this.item = itemes[ 0 ];
this.$forceUpdate( true );
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
console.log('[DEBUG]', "PaginaDeVerItem.mounted");
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