(function(){function a(a,b){var c=document.createElement("a"),a=document.createTextNode(a);c.appendChild(a),c.setAttribute("href",b);var d=document.getElementById("watch-headline-user-info");d==null?document.body.parentNode.insertBefore(c,document.body):d.appendChild(c)}function b(a){var b=a.split("&");for(var c=0;c<b.length;c++){var d=b[c].split("=");if(d[0]=="itag")return parseInt(d[1])}return 0}var c=document.getElementById("movie_player"),d=c.getAttribute("flashvars");d||(d=c.getElementsByTagName("param")[1].value);var e=!0,f=d.split("&");for(j=0;j<=f.length-1;j++)if(f[j].split("=")[0]=="url_encoded_fmt_stream_map"){links=unescape(f[j].split("=")[1]);break}var g=links.split(",url=");for(j=0;j<=g.length-1;j++){fmt=g[j].split("|")[0],fmt.indexOf("rl=")>0?(console.log("ping",fmt),url=fmt.substring(4,fmt.indexOf("fallback_host")-1),url=unescape(unescape(url)),url[0]==":"&&(url="http"+url)):(url=fmt.substring(0,fmt.indexOf("fallback_host")-1),url=unescape(unescape(url)));var h=b(url);switch(h){case 37:a("[HD 1080p MP4]",url);break;case 22:a("[HD 720p MP4]",url);break;case 46:a("[HD 1080p FLV]",url);break;case 45:a("[HD 720p FLV]",url);break;case 35:a("[Medium 480p FLV]",url);break;case 44:a("[Medium 480p WebM]",url);break;case 43:a("[Medium 360p WebM]",url);break;case 34:a("[Medium 360p FLV]",url);break;case 18:a("[Low 270p MP4]",url);break;case 5:a("[Low 226p FLV]",url);break;default:a("["+h+"]",url)}}if(!e)return;var i=document.getElementsByTagName("embed");for(var j=0;j<i.length;j++)var k=i[j].parentNode.removeChild(i[j])})();