$(document).ready(function() {
    
    ace.require("ace/ext/language_tools");

    var htmlEditor = ace.edit("html-editor");
    htmlEditor.getSession().setMode("ace/mode/html");
    htmlEditor.setOptions({
        enableBasicAutocompletion: true
    });

    var cssEditor = ace.edit("css-editor");
    cssEditor.getSession().setMode("ace/mode/css");
    cssEditor.setOptions({
        enableBasicAutocompletion: true
    });
    var jsEditor = ace.edit("js-editor");
    jsEditor.getSession().setMode("ace/mode/javascript");
    jsEditor.setOptions({
        enableBasicAutocompletion: true
    });

    // RUN Button
    $("#btnRun").click(function(event) {  
        event.preventDefault();
        
        var previewDoc = window.frames[0].document;
        
        var css    = ace.edit("css-editor").getSession().getValue();
        var script = ace.edit("js-editor").getSession().getValue();
        var html   = ace.edit("html-editor").getSession().getValue();
        
        previewDoc.write("<!DOCTYPE html>");
        previewDoc.write("<html>");
        previewDoc.write("<head>");
        previewDoc.write("<style type='text/css'>" + css + "</style>");
        previewDoc.write("</head>");
        previewDoc.write("<body>");
        previewDoc.write(html);
        previewDoc.write("<script type='text/javascript'>" + script + "</script>");
        previewDoc.write("</body>");
        previewDoc.write("</html>");
        previewDoc.close();

    });
    
    // Preview code on page load
    $("#btnRun").click();
    
    // TIDYUP Button
    $("#btnTidyUp").click(function(event) {
        event.preventDefault();
        
        var html = ace.edit("html-editor").getSession().getValue();
        var html2 = style_html(html);
        
        ace.edit("html-editor").getSession().setValue(html2);
        
        var css = ace.edit("css-editor").getSession().getValue();
        var css2 = css_beautify(css);
        
        ace.edit("css-editor").getSession().setValue(css2);
        
        var js = ace.edit("js-editor").getSession().getValue();
        var js2 = js_beautify(js);
        
        ace.edit("js-editor").getSession().setValue(js2);
    });

});
