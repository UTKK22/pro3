function myfunction(a)  
        {  
            document.getElementById("result").value+=a;  
        }  
        function Reset()  
        {  
            document.getElementById("result").value = "";  
        }  
        function Clear()  
        {  
            var y = document.getElementById("result").value;  
            document.getElementById("result").value = y.slice(0, y.length-1);  
        }  
        function Result()  
        {   
            var a = document.getElementById("result").value;  
            document.getElementById("result").value=eval(a);  
        }  