//Menu principal
var Menu = React.createClass({
  render : function(){
    return (
      <ul>
        <li>
          <a className='anin-normal' href='https://www.minilink.edgarcornejo.com' title='Minilink'>Minilink</a>
        </li>
        <li>
          <a className='anin-normal' href='profesionales-empresas' title='Profesionales y Empresas'>Profesionales y Empresas</a>
        </li>
        <li>
          <a className='anin-normal' href='afiliate' title='Afiliate'>Afiliate</a>
        </li>
      </ul>
    )
  }
})
React.render( <Menu/>, document.getElementById('navbar'))

//Menu + Footer
var Mfooter = React.createClass({
  render : function(){
    return (
      <aside>
        <div id='content-menu'>
          <div id='menu-footer'>
            <ul className='list'>
              <h4>información</h4>
              <li><a href='nosotros' title='Nosotros'>Nosotros</a></li>
              <li><a href='profesionales-empresas' title='Profesionales y Empresas'>Profesionales y Empresas</a></li>
              <li><a href='afiliate' title='Afiliate'>Afiliate</a></li>
              <li>minilink@edgarcornejo.com</li>
            </ul>

            <ul className='list'>
              <h4>Redes</h4>
              <li><a href='https://www.linkedin.com/company/minilink-soluciones-integrales' target='_blank' className='anin-normal' title='Siguenos en LinkedIn'>LinkedIn</a></li>
              <li><a href='https://www.youtube.com/user/minilinkSI' target='_blank' className='anin-normal' title='Siguenos en YouTube'>YouTube</a></li>
              <li><a href='https://twitter.com/minilinkSI' target='_blank' className='anin-normal' title='Siguenos en Twitter'>Twitter</a></li>
              <li><a href='https://www.facebook.com/minilinksoluciones' target='_blank' className='anin-normal' title='Siguenos en Facebook'>Facebook</a></li>
            </ul>

            <ul className='list'>
              <h4>Recomendado</h4>
              <li><a href='https://www.edgarcornejo.com' target='_blank' title='Edgar Cornejo'>Edgar Cornejo</a></li>
              <li><a href='https://renovadesign.blogspot.com' target='_blank' title='Renova Design'>Renova Design</a></li>
              <li><a href='https://www.fotos.edgarcornejo.com' target='_blank' title='Fotos Gratis'>Fotos Gratis</a></li>
              <li><a href='https://www.edgarcornejo.com/publicaciones/' target='_blank' title='Blog Edgar'>Blog Edgar</a></li>
            </ul>
          </div>
        </div>

        <footer id='main-footer'>
          <p>Copyright © <a href='https://www.edgarcornejo.com' title='Edgar Cornejo'>Edgar Cornejo</a> All Rights Reserved.</p>
        </footer>
      </aside>
    )
  }
})
React.render( <Mfooter/>, document.getElementById('menumasfooter'))


