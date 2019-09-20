export class LoadUtils{

    public static loadShader(url){
        return new Promise(function(resolve, reject){
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onload=function(){
                if (request.status>=200&&request.status<300){
                    resolve(request.responseText);
                }
            }
            request.send();
        });
    }

}