/**
 * Lists all documents by publisher.
 * 
 * @author Benjamin Erb
 */
function(doc) 
{
	if(doc.type === 'document' && doc.published)
	{
			emit([doc.owner,doc._id.substring(2)], {_id : doc._id});
	}
};