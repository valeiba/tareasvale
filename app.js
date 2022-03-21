let autos=[{
    marca:'Ford',
modelo:'Fiesta',
precio:150000,
km:200,
color:'azul',
cuotas:12,
anio:2019,
patente:'APL123',
vendido:false,

},
{
    marca:'Toyota',
modelo:'Corolla',
precio:100000,
km:0,
color:'Blanco',
cuotas:14,
anio:2019,
patente:'JJK116',
vendido:false,

}]
let buyer= {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };
let concesionaria = {
    autos:autos,
    buscarAuto: function buscarAuto(patente){
       let filtropatente = autos.filter ((autos)=>autos.patente === patente)
    if (filtropatente.length === 0){ 
    return null
    }else{
       return filtropatente[0]
       }
       },
venderAuto:function venderAuto(patente){
    this.buscarAuto;
    let nuevoAuto = this.buscarAuto(patente);
    nuevoAuto.vendido = true;
    return nuevoAuto;

    },
autosParaLaVenta: function (){let autosParaVenta = this.autos.filter((autos)=>autos.vendido === false)
        return autosParaVenta
        },
autosNuevos: function autosNuevos(){
    this.autosParaLaVenta
    let cerokm= this.autosParaLaVenta().filter((autos)=>autos.km < 100)
    return cerokm
},
listaDeVentas: function listaDeVentas(){
    
    let autosVendidos= this.autos.filter((autos) =>autos.vendido=== true);

   return autosVendidos.map((auto)=> auto.precio);
     
    
},
totalDeVentas: function totalDeVentas (){
   let ventas = this.listaDeVentas();
   if(ventas.length >0){
       return ventas.reduce((a,b)=> a +b);
   }else {
       return 0;
   }
},
puedeComprar:function puedeComprar(auto, persona){
    if (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas)){
        return true;
    } else {
        return false;};
 },
autosQuePuedeComprar:function(persona){
    let autoVenta= this.autosParaLaVenta()
    let listaAuto=[]
    let venta= autoVenta.map((auto)=> this.puedeComprar(auto,persona))
     if (venta=== true){
         return listaAuto.push(autos)
     } return listaAuto

     },
}



console.log(concesionaria.autosQuePuedeComprar(buyer))