
function(doc) 
{
	if(doc.type === 'keyvalue' && doc.valueType === 'attachment')
	{
		emit([doc.doc_id,doc.attachmentId,doc.user,doc._id.substring(2)], null);
	}
};