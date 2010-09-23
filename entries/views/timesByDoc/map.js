/**
 * Lists all time/dates of a document.
 * 
 * @author Benjamin Erb
 */
function(doc) 
{
	if(doc.type === 'temporal')
	{
		emit([doc.doc_id,doc._id.substring(2)], null);
	}
};