function(doc) 
{
	if(doc.type === 'tag' && doc.tagType === 'attachment')
	{
		emit([doc.doc_id,doc.attachmentId,doc.created,doc._id.substring(2)],null);
	}
};