
var elmnt;
function mouseDown(e, elment)
{
	elmnt = elment;
	e = e || window.event;
	e.preventDefault();

	pos3 = e.clientX;
	pos4 = e.clientY;
	document.onmouseup = closeDragElement;
	document.onmousemove = elementDrag;
}

function elementDrag(e) 
{
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() 
  {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }