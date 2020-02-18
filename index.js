 jQuery.ajax({
    method:"get",
   dataType: 'xml',
   url     : 'http://urlbasewordpress/feed/',
   success : function (feed) {

        var $xml = jQuery(feed),
        items = [];

        $xml.find("item").each(function(i) {
            if (i === 30) return false;
            var $this = jQuery(this);

            var desc = $this.find("description").html();

            onedesc = desc.replace('<![CDATA[','');
            twodesc = onedesc.replace(']]>','');

            var img  = jQuery(twodesc).find('img').attr('src');                       
            var ptag = twodesc;                     

            if(img){

                items.push('<div class="item-blog">\
                                <a href="'+$this.find('link').text()+'">\
                                    <div class="image">\
                                        <img src="'+img+'"/>\
                                    </div>\
                                    <div class="info">\
                                        <h3 class="title">' + $this.find("title").text() + '</h3>\
                                        <div class="desc">' + ptag + '\
                                     </div>\
                                </a>\
                            </div>\
                            <hr />\
                ');
            }
        });
        setTimeout(function(){ 
            jQuery(".rss-feed").html(items);

            jQuery('.rss-feed').slick({
                slidesToScroll:1,
                slidesToShow:5,
                infinite:true,
                arrows:true,
                prevArrow:'<div class="icon-arrow prev"><svg width="10" height="10" viewBox="0 0 28 28"><defs><style>.arrow-left-ic-1-new,.arrow-left-ic-3-new{fill:#066a38;stroke:#066a38}</style><clipPath><path d="M0 0h28v28H0z" class="arrow-left-ic-1-new" transform="translate(90 3105)"/></clipPath></defs><g class="arrow-left-ic-2-new" data-name="ic arrow" transform="translate(-90 -3105)"><g data-name="Layer 2" transform="translate(97.002 3105)"><path d="M34.507 42.281a2 2 0 0 1-1.56-.74l-9.659-12a2 2 0 0 1 0-2.54l10-12a2 2 0 0 1 3.08 2.56l-8.94 10.721L36.067 39a2 2 0 0 1-1.56 3.28z" class="arrow-left-ic-3-new" transform="translate(-22.834 -14.281)"/></g></g></svg></div>',
                nextArrow:'<div class="icon-arrow next"><svg width="10" height="10" viewBox="0 0 28 28"><defs><style>.arrow-right-ic-1-new,.arrow-right-ic-3-new{fill:#066a38;stroke:#066a38}</style><clipPath><path d="M0 0h28v28H0z" class="arrow-right-ic-1-new"/></clipPath></defs><g class="arrow-right-ic-2-new" data-name="ic arrow"><g data-name="Layer 2" transform="translate(7.002)"><path id="arrow-ios-back" d="M25.156 42.281a2 2 0 0 0 1.56-.74l9.659-12a2 2 0 0 0 0-2.54l-10-12a2 2 0 0 0-3.08 2.56l8.939 10.719L23.6 39a2 2 0 0 0 1.56 3.28z" class="arrow-right-ic-3-new" transform="translate(-22.834 -14.281)"/></g></g></svg></div>',        
            });
                
        }, 900);   

   }
});