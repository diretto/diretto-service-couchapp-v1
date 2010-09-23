/**
 * Lists all attachments by upload date
 * 
 * @author Benjamin Erb
 */
function(doc) 
{
	if(doc.type === 'attachment' && doc.location)
	{
		emit([doc.uploaded,doc._id],{id:doc._id.substring(2), _id : doc._id});
	}
};