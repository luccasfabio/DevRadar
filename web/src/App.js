import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css';

navigator.geolocation.getCurrentPosition

function App() {

  return (

    <div id="app">

      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Latitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/48965779?s=460&v=4" alt="Luccas" />
              <div className="user-info">
                <strong>Luccas Kammer</strong>
                <span>ReactJS, React Native, NodeJS, Java</span>
                </div>
            </header>
            <p>Backend developer</p>
            <a href="https://github.com/luccasfabio">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/48965779?s=460&v=4" alt="Luccas" />
              <div className="user-info">
                <strong>Luccas Kammer</strong>
                <span>ReactJS, React Native, NodeJS, Java</span>
                </div>
            </header>
            <p>Backend developer</p>
            <a href="https://github.com/luccasfabio">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/48965779?s=460&v=4" alt="Luccas" />
              <div className="user-info">
                <strong>Luccas Kammer</strong>
                <span>ReactJS, React Native, NodeJS, Java</span>
                </div>
            </header>
            <p>Backend developer</p>
            <a href="https://github.com/luccasfabio">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/48965779?s=460&v=4" alt="Luccas" />
              <div className="user-info">
                <strong>Luccas Kammer</strong>
                <span>ReactJS, React Native, NodeJS, Java</span>
                </div>
            </header>
            <p>Backend developer</p>
            <a href="https://github.com/luccasfabio">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>

  );
}


export default App;
