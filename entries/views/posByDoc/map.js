/**
 * Lists all positions of a document.
 * 
 * @author Benjamin Erb
 */
function(doc) 
{
	if(doc.type === 'spatial')
	{
		emit([doc.doc_id,doc._id.substring(2)], null);
	}
};