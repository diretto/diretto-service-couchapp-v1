/**
 * Lists all comments by attachment and upload date
 * 
 * @author Benjamin Erb
 */
function(doc) 
{
	if(doc.type === 'comment' && doc.commentType === 'link')
	{
		emit([doc.link_id,doc.created,doc._id.substring(2)],null);
	}
};