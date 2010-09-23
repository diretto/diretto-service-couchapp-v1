/**
 * Lists all documents by publishing date
 * 
 * @author Benjamin Erb
 */
function(doc) 
{
	if(doc.type === 'document' && doc.published)
	{
		emit([doc.uploaded,doc._id],{id:doc._id.substring(2), _id : doc._id});
	}
};