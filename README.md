# stl_vr_viewer
WebXR application project for university, that allowing to view stl model for 3D printing in VR
This website uses A-Frame https://github.com/aframevr/aframe and the A frame STL model component library by cadboxx-eu https://github.com/cadboxx-eu/aframe-stl-model-component/tree/master

This VR project is a small demonstration, that could be a basis for a website that offers the user the ability to view files for 3D printing, which are in majority in STL format, to be inspected and interacted with in VR.
This demonstration includes a VR scene, with three buttons and hands that represent the user’s controllers. The three buttons when hovered over and clicked with a VR controller, create a model for the user to interact with. This model can be moved around and viewed from different angles, as well as scaled to be larger or smaller. If the corresponding button is clicked again, the model is removed, and the button must be clicked again for the model to appear in its original position, size, and orientation again. 
To create a model, user has to “touch” or hover over the VR button and then press any key on the controller. To move the models around, the user must press the trigger button on the controller. This can be done with either hand. To resize the model, the user has to use both hands. First, hover over the model, then hold the grip buttons and move the controllers either further apart or closer together. Moving the controllers further apart will enlarge the model and moving the controllers closer together will make the model smaller. 

![image](https://github.com/Jumblii/stl_vr_viewer/assets/41615708/d9721d98-e779-4504-ac68-96b4f493767b)

The STL models used in this project were acquired from: 
1.	3DBenchy - https://www.thingiverse.com/thing:763622
2.	Pikachu - https://www.thingiverse.com/thing:376601
3.	Pug - https://www.thingiverse.com/thing:2629132/files
The STL models are not part of this repository.

To run the website it must be put on a server and you will need some stl models. 
