!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";class o{constructor(e,t){this.name=e,this.type=t}}e.exports={Client:o,Person:class extends o{constructor(e,t){super(e,"Persona"),this.cedula=t}},Enterprise:class extends o{constructor(e,t,n,o){super(e,"Empresa"),this.nit=t,this.size=n,this.sector=o}}}},function(e,t,n){"use strict";var o=n(2),r=n(0);(r=function(e,t,n){this.name=e,this.id=t,this.type=n}).prototype.getClients=(()=>{console.log("Obteniendo listado de clientes");for(let e=0;e<o.length;e++)console.log(o[e])}),r.prototype.getClientsByType=(e=>{console.log("Obteniendo clientes de tipo: "+e)}),r.prototype.getClientByName=(e=>{console.log("Obteniendo cliente con nombre: "+e)}),r.prototype.getClientsBySector=(e=>{console.log("Obteniendo clientes del sector: "+e)}),(new r).getClients()},function(e,t,n){"use strict";var{Enterprise:o,Person:r}=n(0);let i=[new o("Alpina Productos Alimenticios S.A.","860.025.900-2","5,500-10,000 empleados","Alimenticio"),new o("Protección S. A","800.229.739-0","1,001-5,000 empleados","Servicio Financiero"),new o("Seguros Generales Suramericana S.A.","890.903.407-9 ","10,001+ empleados","Seguros"),new o("COORDINADORA MERCANTIL S.A.","890.904.713","1,001-5,000 empleados","Importaciones y Exportaciones"),new r("Juan Montoya","1.038.435,932"),new r("Liza Sanchez","42.813.784")];e.exports=i}]);