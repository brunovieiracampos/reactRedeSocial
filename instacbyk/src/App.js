import React from 'react';

function App () {
    return (
      <div id="root">
      <div className="main">

        <header className="header container">
          <h1 className="header-logo">
            Instalura
          </h1>

          <form className="header-busca">
            <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo"/>
            <input type="submit" value="Buscar" className="header-busca-submit" />
          </form>

          <nav>
            <ul className="header-nav">
              <li className="header-nav-item">
                <a href="#/teste">
                 
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="fotos container">
          <div className="foto">
            <header className="foto-header">
              <figure className="foto-usuario">
                <img src="https://instagram.fsdu17-1.fna.fbcdn.net/vp/a63854988e0554961fff6db1e545c8d9/5D6664D6/t51.2885-19/s320x320/51043614_149189562633057_1649424259509911552_n.jpg?_nc_ht=instagram.fsdu17-1.fna.fbcdn.net" alt="foto do usuario" />
                <figcaption className="foto-usuario">
                  <a href="#/teste">
                    alots
                  </a>  
                </figcaption>
              </figure>
              <time className="foto-data">03/10/2016 20:13</time>
            </header>

            <img alt="foto" className="foto-src" src="https://instagram.fsdu17-1.fna.fbcdn.net/vp/2746e1755f740174674b7577c30230ac/5D62E55E/t51.2885-15/e35/59844692_355856448390933_4129529460212936020_n.jpg?_nc_ht=instagram.fsdu17-1.fna.fbcdn.net" />

            <div className="foto-info">
              <div className="foto-info-likes">

                <a href="#/teste">
                  alots_ssa
                </a>

                ,

                <a href="#/teste">
                  rafael_rollo
                </a> 

                 curtiram
             
              </div>

              <p className="foto-info-legenda">
                {/* <a className="foto-info-autor">autor </a> */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
              </p>

              <ul className="foto-info-comentarios">
                <li className="comentario">
                  {/* <a className="foto-info-autor">seguidor </a> */}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                </li>
                <li className="comentario">
                  {/* <a className="foto-info-autor">seguidor </a> */}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
                </li>
                <li className="comentario">
                  {/* <a className="foto-info-autor">seguidor </a> */}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
                </li>
              </ul>
            </div>


            <section className="fotoAtualizacoes">
              <a href="#/teste" className="fotoAtualizacoes-like">Likar</a>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
              </form>

            </section>

          </div> 
   
          </div> 
        </div>
      </div>
  );
  }


export default App;