// import { setTimeout } from "timers";



export default {
    install:(Vue,arg)=>{
    //    console.log(Vue)
    //    console.log(arg)
        // Vue.component
       var vdbox = document.createElement("div");
       var video =  document.createElement('video');
       vdbox.className = "vdbase vdnone";
       video.className="vdvideo ";
       video.controls=true;
       vdbox.appendChild(video);
       document.body.appendChild(vdbox);
       vdbox.addEventListener("click",e => {
           video.className="vdvideo h0";
           setTimeout(()=>{
                vdbox.className = "vdbase vdhid";
                setTimeout(()=>{
                    vdbox.className = "vdbase vdnone";  
                },500)
           },500)
           video.pause();
           video.src="";
       })

       Vue.directive("vd",{
          bind (el, binding, vnode) {
            el.addEventListener("click",function(e){
                event.stopPropagation();
                var url = el.src||el.getAttribute('src');
                // console.log(el);
                console.log(el.getAttribute('src'))
                // console.log(url);
                video.src=url; 
                vdbox.className = "vdbase vdshow";
                setTimeout(()=>{
                    video.className="vdvideo h4";               
                },100)

            })
          },
          unbind (el, binding) {
            el.removeEventListener("click",()=>{
                console.log("remove")
            })
            
          }
       })
    }
}