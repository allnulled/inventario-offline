
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
 + "        <xformfile ref=\"imagen\" name=\"imagen\">"
 + "          <div>Imagen del ítem:</div>"
 + "        </xformfile>"
 + "        <template v-if=\"item.imagen\">"
 + "          <img :src=\"item.imagen\" />"
 + "        </template>"
 + "        <xformfield ref=\"nombre\" name=\"nombre\" :input-value=\"item.nombre\">Nombre del ítem:</xformfield>"
 + "        <xformtext ref=\"descripcion\" name=\"descripcion\" :input-value=\"item.descripcion\">Descripción del ítem:</xformtext>"
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
return { item:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async guardar_item() {try {
console.log('[DEBUG]', "PaginaDeEditarItem.guardar_item");
const nombre = this.$refs.nombre.$el.querySelector( "input" ).value;
const descripcion = this.$refs.descripcion.$el.querySelector( "textarea" ).value;
const imagen_fichero = (await this.$refs.imagen.obtener_fichero_seleccionado(  ));
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