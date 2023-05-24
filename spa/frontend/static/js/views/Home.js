import AbstractViews from "./AbstractViews.js";

export default class extends AbstractViews {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }

  async getHtml() {
    return `
    <h1 class="title">Bienvenue dans le monde des chats !</h1>
  
      <section class="welcome-section">
        <p>Bienvenue sur mon application de recherche de chats ! Cette application a été conçue et développée en utilisant Node.js pour fournir un environnement de back-end robuste et efficace.</p>
      </section>
      
      <div class="image-container">
        <img src="static/image/chat.jpg" alt="Image de chat">
      </div>
      
      <p class="api-link">API : <a href="https://thecatapi.com/" target="_blank">thecatapi.com</a></p>
    `;
  }
  

  async afterRender() {}
}
