
window.PaginaDeCrearAlmacen = Castelog.metodos.un_componente_vue2("PaginaDeCrearAlmacen",
  "<div class=\"PaginaDeCrearAlmacen Component\">"
 + "    <xtitle>Página de crear almacén</xtitle>"
 + "    <xbreadcrumb>"
 + "      <xlink href=\"#/\">Inicio</xlink>"
 + "      <span> » </span>"
 + "      <span>Crear almacén</span>"
 + "    </xbreadcrumb>"
 + "    <xpanel>"
 + "      <xform>"
 + "        <xformfield ref=\"nombre\" name=\"nombre\">Nombre del almacén:</xformfield>"
 + "        <xformtext ref=\"descripcion\" name=\"descripcion\">Descripción del almacén:</xformtext>"
 + "      </xform>"
 + "    </xpanel>"
 + "    <xlayoutnopaddingtop style=\"text-align: right;\">"
 + "      <span v-on:click=\"crear_almacen\">"
 + "        <xbutton>Crear almacén</xbutton>"
 + "      </span>"
 + "    </xlayoutnopaddingtop>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeCrearAlmacen.data");
return { almacenes:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async crear_almacen() {try {
console.log('[DEBUG]', "PaginaDeCrearAlmacen.crear_almacen");
const nombre = this.$refs.nombre.$el.querySelector( "input" ).value;
const descripcion = this.$refs.descripcion.$el.querySelector( "textarea" ).value;
const db = (await this.root.obtener_conexion(  ));
const id_almacen = (await db.insert( "almacen",
{ nombre,
descripcion
} ));
this.$router.history.push( "/ver/almacen/" + id_almacen );
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