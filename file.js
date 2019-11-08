/*$(document).ready(function(){
$("input").change(function(){
    let file=this.files.length;

    for( i=0;i<=file;i++ ){
        console.log(this.files[i]);
        console.log(this.files[i].lastModifiedDate);
    }

  
    
})
})*/
$(document).ready(function(){
    $("input").change(function(){
        let file=this.files.length;
    
    
        for( i=0;i<file;i++ ){

            var reader=new FileReader();
            let myfile = this.files[i];
            reader.readAsText(myfile);
            reader.onload=function(e){
                console.log(e.target.result);
            };
            reader.onerror=function(d){
    
                console.log(d.target.error)
            };
               
        }
        
    })
    })
