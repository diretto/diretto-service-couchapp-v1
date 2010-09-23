/**
 * Lists all comments by attachment and upload date
 * 
 * @author Benjamin Erb
 */
function(doc) 
{
	if(doc.type === 'comment')
	{
		emit([doc.user,doc.created,doc._id.substring(2)],null);
	}
};