var mainComp = app.project.activeItem;
var mainLayer = mainComp.layer(1);

var mainWindow = new Window('palette', 'OFERTAS', undefined);

var grupoUm = mainWindow.add('group', undefined, 'grupoUm');
var grupoDois = mainWindow.add('group', undefined, 'grupoDois');
var grupoTres = mainWindow.add('group', undefined, 'grupoTres');
var grupoQuatro = mainWindow.add('group', undefined, 'grupoQuatro');


grupoUm.add('statictext', undefined, 'Descrição do Produto 1');
var tituloNome1 = grupoUm.add('edittext', undefined, 'descriçao');

grupoDois.add('statictext', undefined, 'Descrição do Produto 2');
var tituloNome2 = grupoDois.add('edittext', undefined, 'descriçao');

grupoTres.add('statictext', undefined, 'Descrição do Produto 3');
var tituloNome3 = grupoTres.add('edittext', undefined, 'descriçao');

var botaoAplicar = grupoQuatro.add('button', undefined, 'Aplicar')

botaoAplicar.onClick = function(){
    var comp = app.project.activeItem;
    
        
    // Prompt the user for a new text
    var newText = tituloNome1.
    
    //prompt("Enter new text:", "New Text");

    // Change the text of the selected text layer
    var textLayer = comp.selectedLayers[0];
    var textProperty = textLayer.property("Source Text");
    textProperty.setValue(newText);

    // Save the project
    app.project.save();
    
}

mainWindow.show();