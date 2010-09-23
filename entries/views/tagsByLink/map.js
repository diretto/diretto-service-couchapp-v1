function(doc) 
{
	if(doc.type === 'tag' && doc.tagType === 'link')
	{
		emit([doc.link_id,doc.created,doc._id.substring(2)],null);
	}
};