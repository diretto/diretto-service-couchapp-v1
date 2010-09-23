/**
 * Lists all comments by attachment and upload date
 * 
 * @author Benjamin Erb
 */
function(doc) 
{
	if(doc.type === 'comment' && doc.commentType === 'attachment')
	{
		emit([doc.doc_id,doc.attachmentId,doc.created,doc._id.substring(2)],null);
	}
};