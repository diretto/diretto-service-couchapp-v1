/**
 * Change notification filter for newly inserted attachments.
 * 
 * @author Benjamin Erb
 */
function(doc, req)
{
  if(doc.type === 'attachment' && !(doc.location === void 0)) 
  {
	  return true;
  }
  else
  {
	  return false;
  }
};