   
    function night_dayHandler (self){
        var target=document.querySelector('body');
        if(self.value==='night'){
            target.style.color='white';
            target.style.backgroundColor='black';
            self.value='day';

            Links.setColor('blue');}

        else{target.style.color='black';
            target.style.backgroundColor='white';
            self.value='night';
        
        Links.setColor('purple');}}


    var Links={
        setColor:function(color){
        var alist=document.querySelectorAll('a');
        var i=0;
        while(i<alist.length){
            alist[i].style.color=color;
            i=i+1;
        }
    }}
    var Body={
        setColor:function(color){
            document.querySelector('body').style.color=color;},
        setBackgroundColor:function(color){
            document.querySelector('body').style.backgroundColor=color;}
        }
    