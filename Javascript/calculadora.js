function calcular() {

    var nome = document.querySelector('#nom')
    var orca = document.querySelector('#orc')
    var larg = document.querySelector('#lar')
    var comp = document.querySelector('#com')
    var piso = document.querySelector('#pis')
    var arga = document.querySelector('#arg')

    var t_area = (larg.value*comp.value)*1.2
    var t_uniarg = Math.ceil(t_area/4)
    var t_vpiso = t_area*piso.value
    var t_varg = t_area*arga.value
    var t_total = t_vpiso+t_varg

    if(t_total<orca.value){
        document.querySelector('#resp').innerHTML='Valor da compra é compatível com o orçamento'
    }else{
        document.querySelector('#resp').innerHTML='Valor da compra NÃO é compatível com o orçamento'
    }
    
    document.querySelector('#rarea').innerHTML=t_area
    document.querySelector('#unidarg').innerHTML=t_uniarg
    document.querySelector('#valorpiso').innerHTML=t_vpiso
    document.querySelector('#valorarg').innerHTML=t_varg
    document.querySelector('#totalcom').innerHTML=t_total
  }
