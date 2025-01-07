

       function create(a, b, c, d, e, z, Width, Height, divid){
        let element=document.createElement(d);
        let container=document.querySelector(c);
        if (d=='img'){
            let Parent=document.createElement('div');
            Parent.id=divid;
            Parent.classList.add(a);
            Parent.style.zIndex=z;
            document.querySelector(container).appendChild(Parent);
            element.width=Width;
            element.height=Height;
            element.id=a;
            element.classList.add(b)
            document.querySelector(Parent).appendChild(element)
        }
        else{
            
            element.innerText=e;
            element.id=a;
            element.classList.add(b);
            element.style.zIndex=z;
            container.appendChild(element)
        }
    
       }
       
       function removeElement(e) {
        let ele = document.getElementById(e)
        
          let parent = ele.parentNode;
          parent.removeChild( ele);
          
        }
    
     document.addEventListener('DOMContentLoaded', function(){
        console.log('p');
        create('S1', 'top', 'body', 'div', '', '1', '0', '0','0',)
        create('header1', 'header', '#S1', 'header', '', '1', '1', '1', '1',)
        create('S1_h', 'h', '#header1', 'h1', 'hello', '1', '1', '1', '1', );
        document.addEventListener('click', function (){
            removeElement('S1')
        }) 
      })
       
      