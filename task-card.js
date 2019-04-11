import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class TaskCard extends PolymerElement {

    static get template() {
        return html`
        <style>
        .card {
            border: 2px dashed black;
            border-top: 5px solid black;
            border-bottom: 5px solid black;
            
          }
          #notification {
            height:35px;
            width: 35px;
            text-align: center;
            color: white;
            background: red;
            border-radius: 50%;
            position: relative;
            left: 90%; 
          }
          .task {
            color: Red;
            text-align: center;
            border: 1px solid grey;
            padding: 15px;
            margin: 10px;
          }
          
          .details {
            color: teal;
            font-style: italic;
            text-align: center;
            background: yellow;
          }
 
        </style >

      <div class='card'>
          <div id="notification">!</div>
          <div class='task'>
              <h1>Task: Code Kanban</h1>
              <h4>Assigned To: Mike Smith</h4>
          </div>
          <div class='details'>
              <h2>Urgency: High</h2>
              <h3>Due Date: July 1, 2019<h3>
          </div>
        
      </div> 
 
        `;
    }

}

customElements.define('task-card', TaskCard);