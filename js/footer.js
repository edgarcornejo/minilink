//Menu principal
var Menu = React.createClass({
    render : function(){
        return (
            <ul>
                <li><a className='anin-normal' href='http://www.minilink.edgarcornejo.com' title='Minilink'>Minilink</a></li>
                <li><a className='anin-normal' href='profesionales-empresas' title='Profesionales y Empresas'>Profesionales y Empresas</a></li>
                <li><a className='anin-normal' href='afiliate' title='Afiliate'>Afiliate</a></li>
            </ul>
        )
    }
})
React.render( <Menu/>, document.getElementById('navbar'))

//Menu + Footer
var Mfooter = React.createClass({
    render : function(){
        return (
            <div>
                <section id='content-menu'>
                    <div id='menu-footer'>
                        <ul className='list'>
                            <h4>información</h4>
                            <li><a href='http://www.minilink.edgarcornejo.com' title='Minilink Soluciones'>Minilink Soluciones</a></li>
                            <li><a href='nosotros' title='Nosotros'>Nosotros</a></li>
                            <li><a href='profesionales-empresas' title='Profesionales y Empresas'>Profesionales y Empresas</a></li>
                            <li><a href='afiliate' title='Afiliate'>Afiliate</a></li>
                            <li>minilink@edgarcornejo.com</li>
                        </ul>
                                  
                        <ul className='list quitar'>
                            <h4>Importante</h4>
                            <li>Minilink Soluciones no es intermediario, el contacto es directo con la empresa o profesional. <br/>
                            Los pagos se hacen a las empresas o profesionales no a Minilink Soluciones. <br/>
                            Si no desea continuar publicando en Minilink Soluciones, comunicarse a minilink@edgarcornejo.com</li>
                        </ul>

                        <ul className='list'>
                            <h4>Redes</h4>
                            <li><a href='https://www.linkedin.com/company/minilink-soluciones-integrales' target='_blank' className='anin-normal' title='Siguenos en LinkedIn'>LinkedIn</a></li>
                            <li><a href='https://www.youtube.com/user/minilinkSI' target='_blank' className='anin-normal' title='Siguenos en YouTube'>YouTube</a></li>
                            <li><a href='https://twitter.com/minilinkSI' target='_blank' className='anin-normal' title='Siguenos en Twitter'>Twitter</a></li>
                            <li><a href='https://plus.google.com/+Minilink-soluciones' rel='publisher' target='_blank' className='anin-normal' title='Siguenos en G+'>Google+</a></li>
                            <li><a href='https://www.facebook.com/minilinksoluciones' target='_blank' className='anin-normal' title='Siguenos en Facebook'>Facebook</a></li>
                            <li><a href='https://plus.google.com/+EdgarCornejoCahuana?rel=author'>Perfil en G+</a></li>
                        </ul>

                        <ul className='list'>
                            <h4>Enlace Web</h4>
                            <li><a href='http://www.edgarcornejo.com' target='_blank' title='Edgar Cornejo'>Edgar Cornejo</a></li>
                            <li><a href='http://www.minilink.edgarcornejo.com' target='_blank' title='Minilink Soluciones'>Minilink Soluciones</a></li>
                            <li><a href='http://renovadesign.blogspot.com' target='_blank' title='Renova Design'>Renova Design</a></li>
                            <li><a href='http://www.fotos.edgarcornejo.com' target='_blank' title='Fotos Gratis'>Fotos Gratis</a></li>
                            <li><a href='http://www.blog.edgarcornejo.com' target='_blank' title='Blog Edgar'>Blog Edgar</a></li>
                        </ul>
                    </div>
                </section>

                <footer id='main-footer'>
                    <p><a href='http://www.edgarcornejo.com' target='_blank' title='Edgar Cornejo'><img src='img/edgarcornejo.png' alt='Edgar Cornejo'/></a> Copyright © <a href='http://www.edgarcornejo.com' title='Edgar Cornejo'>Edgar Cornejo</a> All Rights Reserved.</p>
                </footer>
            </div>
        )
    }
})
React.render( <Mfooter/>, document.getElementById('menumasfooter'))


