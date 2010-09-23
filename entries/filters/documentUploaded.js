/**
 * Change notification filter for successfully uploaded documents.
 * 
 * @author Benjamin Erb
 */
function(doc, req)
{
  if(doc.type === 'attachment' && !(doc.location === void 0) && doc._id.substring(2)  === doc.doc_id) 
  {
		return true;
  }
  else
  {
	  return false;
  }
};