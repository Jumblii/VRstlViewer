//New component is created for each button. When the click event takes place
//a model is either created and added to the scene or removed from it depending
//on whether there is a same model already in the scene. Also changes the colour
//of the buttons.
AFRAME.registerComponent("red", {
  events: 
  {
    click: function (evt) 
    {
      this.scene = document.querySelector("a-scene");
      this.model = document.querySelector("#benchy");
      if(this.model==null) 
      {
        this.el.setAttribute("material", "color", "#CD5C5C");

        this.model = document.createElement("a-entity");
    
        this.model.setAttribute("id","benchy");
        this.model.setAttribute("class","movable");
        this.model.setAttribute("stl-model", {src: "#benchySTL"});
        this.model.setAttribute("scale", "0.005 0.005 0.005");
        this.model.setAttribute("position", "-0.3 1.1 -0.2");
        this.model.setAttribute("rotation", "-90 0 0");
        this.model.setAttribute("material", "color", "#800000" );
        this.model.setAttribute("mixin", "movable");
        
        this.scene.appendChild(this.model);
      } else
        {
          this.el.setAttribute("material", "color", "#800000");
          this.scene.removeChild(this.model);
        }
    }
  }
});

AFRAME.registerComponent("yellow", {
  events: 
  {
    click: function (evt) 
    {
      this.scene = document.querySelector("a-scene");
      this.model = document.querySelector("#pikachu");
      if(this.model==null) 
      {
        this.el.setAttribute("material", "color", "#FFEF33");

        this.model = document.createElement("a-entity");
    
        this.model.setAttribute("id","pikachu");
        this.model.setAttribute("class","movable");
        this.model.setAttribute("stl-model", {src: "#pikachuSTL"});
        this.model.setAttribute("scale", "0.005 0.005 0.005");
        this.model.setAttribute("position", "0 1.1 -0.4");
        this.model.setAttribute("rotation", "-90 0 0");
        this.model.setAttribute("material", "color", "#ffc100" );
        this.model.setAttribute("mixin", "movable");
        
        this.scene.appendChild(this.model);
      } else
        {
          this.el.setAttribute("material", "color", "#ffc100");
          this.scene.removeChild(this.model);
        }
    }
  }
});

AFRAME.registerComponent("green", {
  events: 
  {
    click: function (evt) 
    {
      this.scene = document.querySelector("a-scene");
      this.model = document.querySelector("#pug");
      if(this.model==null) 
      {
        this.el.setAttribute("material", "color", "#32CD32");

        this.model = document.createElement("a-entity");
    
        this.model.setAttribute("id","pug");
        this.model.setAttribute("class","movable");
        this.model.setAttribute("stl-model", {src: "#pugSTL"});
        this.model.setAttribute("scale", "0.002 0.002 0.002");
        this.model.setAttribute("position", "0.3 1.1 -0.2");
        this.model.setAttribute("rotation", "-90 -40 0");
        this.model.setAttribute("material", "color", "#008000" );
        this.model.setAttribute("mixin", "movable");
        
        this.scene.appendChild(this.model);
      } else
        {
          this.el.setAttribute("material", "color", "#008000");
          this.scene.removeChild(this.model);
        } 
    }
  }
});