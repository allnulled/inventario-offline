
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
 + "        <xformfile ref=\"imagen\" name=\"imagen\">Imagen del ítem:</xformfile>"
 + "        <xformfield ref=\"nombre\" name=\"nombre\">Nombre del ítem:</xformfield>"
 + "        <xformtext ref=\"descripcion\" name=\"descripcion\">Descripción del ítem:</xformtext>"
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
console.log('[DEBUG]', "PaginaDeEditarAlmacen.data");
return { almacen:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async crear_item() {try {
console.log('[DEBUG]', "PaginaDeEditarAlmacen.crear_item");
const nombre = this.$refs.nombre.$el.querySelector( "input" ).value;
const descripcion = this.$refs.descripcion.$el.querySelector( "textarea" ).value;
let imagen = undefined;
const fichero_imagen = this.$refs.imagen.obtener_fichero_seleccionado(  );
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