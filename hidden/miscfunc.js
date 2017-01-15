// B.H.
function do_nothing() {
  return; // javascript:do_nothing() to "fake" the links that us onclick to open a popup
}

function show_flash(fsrc,fwidth,fheight,fbgcolor,fwmode) {
  flash_obj_html = "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='"+fwidth+"' height='"+fheight+"' border='0'><param name='allowScriptAccess' value='sameDomain' /><param name='movie' value='"+fsrc+"' /><param name='quality' value='high' /><param name='bgcolor' value='"+fbgcolor+"' /> <param name='wmode' value='"+fwmode+"' /><embed src='"+fsrc+"' wmode='"+fwmode+"' quality='high' bgcolor='"+fbgcolor+"' width='"+fwidth+"' height='"+fheight+"' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='https://www.macromedia.com/go/getflashplayer' /></object>";
  document.write(flash_obj_html);
}

function show_wmp(src,width,height,autostart) {
  wmp_obj_html = '<object width="'+width+'" height="'+height+'" border="0" type="application/x-oleobject" standby="Loading Microsoft Windows Media Player components..." classid="CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6" bgcolor="black"><param value="'+src+'" name="URL" />  <param value="1" name="rate" /> <param value="1" name="balance" /> <param value="0" name="currentPosition" /> <param value="" name="defaultFrame" /> <param value="1" name="playCount" /> <param value="'+autostart+'" name="autoStart" /> <param value="0" name="currentMarker" /> <param value="-1" name="invokeURLs" /> <param value="" name="baseURL" /> <param value="50" name="volume" /> <param value="0" name="mute" /> <param value="full" name="uiMode" /> <param value="-1" name="stretchToFit" /> <param value="0" name="windowlessVideo" /> <param value="-1" name="enabled" /> <param value="0" name="enableContextMenu" /> <param value="0" name="fullScreen" /> <param value="0" name="enableErrorDialogs" /> <param value="10319" name="_cx" /> <param value="9604" name="_cy" /> </object>';
  document.write(wmp_obj_html);
}
function change_to_wmp(elm_id,src,width,height,autostart) {
  wmp_obj_html = '<object width="'+width+'" height="'+height+'" border="0" type="application/x-oleobject" standby="Loading Microsoft Windows Media Player components..." classid="CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6" bgcolor="black"><param value="'+src+'" name="URL" />  <param value="1" name="rate" /> <param value="1" name="balance" /> <param value="0" name="currentPosition" /> <param value="" name="defaultFrame" /> <param value="1" name="playCount" /> <param value="'+autostart+'" name="autoStart" /> <param value="0" name="currentMarker" /> <param value="-1" name="invokeURLs" /> <param value="" name="baseURL" /> <param value="50" name="volume" /> <param value="0" name="mute" /> <param value="full" name="uiMode" /> <param value="-1" name="stretchToFit" /> <param value="0" name="windowlessVideo" /> <param value="-1" name="enabled" /> <param value="0" name="enableContextMenu" /> <param value="0" name="fullScreen" /> <param value="0" name="enableErrorDialogs" /> <param value="10319" name="_cx" /> <param value="9604" name="_cy" /><embed src="'+src+'"  width="'+width+'" height="'+height+'" autostart="'+autostart+'" border="0" type="video/x-ms-wmv"></embed> </object>';
  aelm = document.getElementById(elm_id);
  aelm.innerHTML = wmp_obj_html; 
}

//load ticker
window.onload = loadtickers;
//dummy functions so loadtickers will work if only one is defined
function populate(){}
function populate_b(){}
function loadtickers()
{
	populate();
	populate_b();
}
function setTitle(title)
{
	document.title = title;
}
function showImage(url,title,x,y)
{
  if (x==0) x=600;
  if (y==0) y=400;
  win_x=x+40;
  win_y=y+40;
	w = window.open(url, title, "height="+win_y+"px,width="+win_x+"px,location=no,scrollbars=yes,titlebar=no,menubars=no,toolbars=no,resizable=yes,margin=0");
	// setTimeout("w.resizeTo("+x+","+y+")",1000);
}
function popup(url,title,x,y)
{
  win_x=x+40;
  win_y=y+40;
	w = window.open(url, title, "height="+win_y+"px,width="+win_x+"px,location=no,scrollbars=yes,titlebar=no,menubars=no,toolbars=no,resizable=yes,margin=0");
	//setTimeout("w.resizeTo("+x|","+y+")",1000);
}

function popup_browser(url) {
  w = window.open(url);
}

function showComment(idx)
{
	comdiv = document.getElementById("comment"+idx);	
	textdiv = document.getElementById("commentText"+idx);
	if(textdiv.style.display=="block")
	{
			textdiv.style.display="none";
			if(idx%2==0)			
				comdiv.className="commentEven";
			else
				comdiv.className="commentOdd";
	}
	else
	{
		textdiv.style.display="block";
		comdiv.className='commentOn';
	}	
}
function show_all_comments() {
   c_showall=document.getElementById("com_showall");
   c_hideall=document.getElementById("com_hideall");
   
   c_hideall.style.display="block";
   c_showall.style.display="none";
   
   idx=1;
   comdiv = document.getElementById("comment"+idx);	
   textdiv = document.getElementById("commentText"+idx);
   while (comdiv) {
       textdiv.style.display="block";
       comdiv.className='commentOn';
       idx++;
       comdiv = document.getElementById("comment"+idx);	
       textdiv = document.getElementById("commentText"+idx);
   }
}
function hide_all_comments() {
   c_showall=document.getElementById("com_showall");
   c_hideall=document.getElementById("com_hideall");
   
   c_showall.style.display="block";
   c_hideall.style.display="none";
   idx=1;
   comdiv = document.getElementById("comment"+idx);	
   textdiv = document.getElementById("commentText"+idx);
   while (comdiv) {
       textdiv.style.display="none";
       if(idx%2==0)			
         comdiv.className="commentEven";
       else
         comdiv.className="commentOdd";
       idx++;
       comdiv = document.getElementById("comment"+idx);	
       textdiv = document.getElementById("commentText"+idx);
   }
}


/***********************************************
* Bookmark site script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

/* Modified to support Opera */
function dd_bookmarksite(title,url){
if (window.sidebar) // firefox
	window.sidebar.addPanel(title, url, "");
else if(window.opera && window.print){ // opera
	var elem = document.createElement('a');
	elem.setAttribute('href',url);
	elem.setAttribute('title',title);
	elem.setAttribute('rel','sidebar');
	elem.click();
} 
else if(document.all)// ie
	window.external.AddFavorite(url, title);
}

