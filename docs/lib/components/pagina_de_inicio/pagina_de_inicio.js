
window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <xtitle>Pagina de inicio</xtitle>"
 + "    <xbreadcrumb>"
 + "      <span>Inicio</span>"
 + "    </xbreadcrumb>"
 + "    <xtable v-if=\"almacenes && almacenes.length\">"
 + "      <xtablerow>"
 + "        <xtableheader>ID</xtableheader>"
 + "        <xtableheader>Almacén</xtableheader>"
 + "        <xtableheader>Descripción</xtableheader>"
 + "      </xtablerow>"
 + "      <xtablerow v-for=\"almacen, almacen_index in almacenes\" v-bind:key=\"'almacen-' + almacen_index\">"
 + "        <xtablecell>"
 + "          <span v-on:click=\"() => ir_a_ver_almacen(almacen.id)\">"
 + "            <xbutton>{{ almacen.id }}</xbutton>"
 + "          </span>"
 + "        </xtablecell>"
 + "        <xtablecell class=\"text_split_anywhere\">{{ almacen.nombre.substr(0,50) }}{{  almacen.nombre.length > 50 ? '...' : '' }}</xtablecell>"
 + "        <xtablecell class=\"text_split_anywhere\">{{ almacen.descripcion.substr(0, 50) }}{{  almacen.descripcion.length > 50 ? '...' : '' }}</xtablecell>"
 + "      </xtablerow>"
 + "    </xtable>"
 + "    <xlayout v-else=\"\">"
 + "      <xparagraph>No se encontraron almacenes actualmente.</xparagraph>"
 + "    </xlayout>"
 + "    <xlayout style=\"text-align: right;\">"
 + "      <span v-on:click=\"ir_a_crear_almacen\">"
 + "        <xbutton>Ir a crear almacén</xbutton>"
 + "      </span>"
 + "    </xlayout>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeInicio.data");
return { almacenes:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ ir_a_ver_almacen( id_almacen ) {try {
console.log('[DEBUG]', "PaginaDeInicio.ir_a_ver_almacen");
this.$router.history.push( "/ver/almacen/" + id_almacen );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_crear_almacen() {try {
console.log('[DEBUG]', "PaginaDeInicio.ir_a_crear_almacen");
this.$router.history.push( "/crear/almacen" );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_almacenes() {try {
console.log('[DEBUG]', "PaginaDeInicio.obtener_almacenes");
const db = (await this.root.obtener_conexion(  ));
this.almacenes = (await db.select( "almacen" ));
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
console.log('[DEBUG]', "PaginaDeInicio.mounted");
(await this.obtener_almacenes(  ));
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