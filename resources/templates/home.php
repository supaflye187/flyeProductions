<section>
<nav id="cowts-nav-filter" class="py-5">
    <div id="filter-container">
    <div class="inner-filter">
        <ul class="menu-filter">
            <li id="filter-all" class="d-block py-2 btn d-md-inline menu-item"><a href=""><span>ALL</span></a></li>
            <li id="Animation" class="d-block py-2 btn d-md-inline menu-item"><a href="" ><span>ANIMATION</span></a></li>
            <li id="Display" class="d-block py-2 btn d-md-inline menu-item"><a href=""><span>DISPLAY ADS</span></a></li>
            <li id="Development" class="d-block py-2 btn d-md-inline menu-item"><a href=""><span>DEVELOPMENT</span></a></li>
            <li id="Illustration" class="d-block py-2 btn d-md-inline menu-item"><a href=""><span>ILLUSTRATION</span></a></li>
        </ul>
    </div>
</div>
</nav>
</section>

<section>
        <div class="image-container filter-wrap">          
          <div class="gallery-image filter-item all image-inner Animation">
              <a href="https://cowts.com/hank-darby"><div class="image-overlay">
                            <div class="post-title">
                                <h4>The Art of Beer Making</h4> 
                                <div class="gallery-categories">
                                    <ul class="gallery-list"><li>Animation</li></ul>
                                 </div>
                        </div>
                    </div></a>
                <img src="" alt="">
            </div>
             <!-- END ITEMS -->                      
        <div id="filter-mask"></div> <!-- mask is last -->
      </div>
</section>


<script>
function filterMe() {
  var filterVars = ['Animation', 'Display', 'Development', 'Illustration']; // define filter categories here
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
  </script>