 var loadformTemplate=function(formId){
    /* Formio library files */
    const formioJsFile = document.createElement('script');
    formioJsFile.src = `http://localhost:5000/cdn/formio.full.min.js`;
    document.head.appendChild(formioJsFile);
    
    /* Css files */
    const loadCssFile = document.createElement('link');
    loadCssFile.rel = 'stylesheet';
    loadCssFile.href="http://localhost:5000/dependency/avesdo-styles.css";
    document.head.appendChild(loadCssFile);

    setTimeout(() => {
        fetchFromTemplateBasedOnId(formId);
    }, 1000)
 }

 
 var fetchFromTemplateBasedOnId = function(formId){
    const test = document.createElement('div');
    test.id ='avesdo-form';  
    document.body.appendChild(test);

    const fromioRenderer = document.createElement('script');
    fromioRenderer.innerText = `Formio.createForm(document.getElementById('avesdo-form'), 'http://localhost:5000/form/${formId}' ,{ })`;
    document.head.appendChild(fromioRenderer);
 }
 


  


