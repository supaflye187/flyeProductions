function filterMe() {
    var filterVars = ['Animation', 'Display', 'Video']; // define filter categories here
    var filterItems = document.querySelectorAll('.filter-wrap .filter-item');
    
        for (var i = 0; i < filterVars.length; ++i){
                window['btn' + filterVars[i]] = document.getElementById(filterVars[i]);
                window['get' + filterVars[i]] = document.querySelectorAll('.filter-wrap .' + filterVars[i]);
    
                window['btn' + filterVars[i]].onclick = (function(i){
                   
                    
                    return function(e){
                        console.log(filterVars[i] + ' was clicked!!!!');
                        e.preventDefault();
                        filterMask();
                        setTimeout(function(){
                            filterHide(filterItems);
                            filterShow(window['get' + filterVars[i]]);
                            }, 500);
                        }
                    }(i));
            }
    
    
            document.getElementById('filter-all').onclick = function(e){
            console.log('All button clicked!!!!');
            e.preventDefault();
            filterMask();
            setTimeout(function(){ filterShow(filterItems); }, 500);
            }
    
    
            function filterHide(el){
            for (var i = 0; i < el.length; ++i){
                el[i].style.display = 'none';
                }
            }
            function filterShow(el){
                for (var i = 0; i < el.length; ++i){
                    el[i].style.display = 'block';
                    }
                }
            function filterMask(){
                var mask = document.getElementById('filter-mask');
                mask.className = 'filter-mask';
                setTimeout(function(){ mask.className = '' }, 1000);
                }
    
    }
    
    filterMe();
           
            function runMe() {
                 filterMe();
            }
            
    document.addEventListener('swup:contentReplaced', runMe);