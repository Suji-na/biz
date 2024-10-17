function initialize(ido, keido) {
    var latlng = new google.maps.LatLng(ido, keido);
    var opts = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), opts);

    //ポイント表示箇所
    var m_latlng1 = new google.maps.LatLng(ido, keido);
    var marker1 = new google.maps.Marker({
        position: m_latlng1,
        map: map,
        icon: "/biz/shisan/assets/images/common/icn_map_01.gif"
    });

}

function initialize2(ido, keido) {
    var latlng = new google.maps.LatLng(ido, keido);
    var opts = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas2"), opts);

    //ポイント表示箇所
    var m_latlng1 = new google.maps.LatLng(ido, keido);
    var marker1 = new google.maps.Marker({
        position: m_latlng1,
        map: map,
        icon: "/biz/shisan/assets/images/common/icn_map_01.gif"
    });

}