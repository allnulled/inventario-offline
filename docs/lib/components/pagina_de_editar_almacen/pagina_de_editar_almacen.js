
window.PaginaDeEditarAlmacen = Castelog.metodos.un_componente_vue2("PaginaDeEditarAlmacen",
  "<div class=\"PaginaDeEditarAlmacen Component\">"
 + "    <xtitle>Página de crear almacén</xtitle>"
 + "    <xbreadcrumb>"
 + "      <xlink href=\"#/\">Inicio</xlink>"
 + "      <span> » </span>"
 + "      <xlink :href=\"'#/ver/almacen/' + $route.params.id_almacen\">Ver almacén</xlink>"
 + "      <span> » </span>"
 + "      <span>Editar almacén</span>"
 + "    </xbreadcrumb>"
 + "    <xpanel v-if=\"almacen\">"
 + "      <xform>"
 + "        <xformfield ref=\"nombre\" name=\"nombre\" :input-value=\"almacen.nombre\">Nombre del almacén:</xformfield>"
 + "        <xformtext ref=\"descripcion\" name=\"descripcion\" :input-value=\"almacen.descripcion\">Descripción del almacén:</xformtext>"
 + "      </xform>"
 + "    </xpanel>"
 + "    <xlayoutnopaddingtop style=\"text-align: right;\">"
 + "      <span v-on:click=\"guardar_almacen\">"
 + "        <xbutton>Guardar almacén</xbutton>"
 + "      </span>"
 + "    </xlayoutnopaddingtop>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeEditarAlmacen.data");
return { almacen:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async guardar_almacen() {try {
console.log('[DEBUG]', "PaginaDeEditarAlmacen.guardar_almacen");
const nombre = this.$refs.nombre.$el.querySelector( "input" ).value;
const descripcion = this.$refs.descripcion.$el.querySelector( "textarea" ).value;
const db = (await this.root.obtener_conexion(  ));
const respuesta_actualizar = (await db.update( "almacen",
this.almacen.id,
{ nombre,
descripcion
} ));
console.log(respuesta_actualizar);
this.$router.history.push( "/ver/almacen/" + this.almacen.id );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_almacen() {try {
console.log('[DEBUG]', "PaginaDeEditarAlmacen.obtener_almacen");
const db = (await this.root.obtener_conexion(  ));
const almacenes = (await db.select( "almacen",
( almacen ) => {try {
return almacen.id === parseInt( this.$route.params.id_almacen );
} catch(error) {
console.log(error);
throw error;
}

} ));
console.log(almacenes);
this.almacen = almacenes[ 0 ];
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
console.log('[DEBUG]', "PaginaDeEditarAlmacen.mounted");
(await this.obtener_almacen(  ));
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