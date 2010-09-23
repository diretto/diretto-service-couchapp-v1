function(doc) 
{
	if(doc.type === 'tag')
	{
		emit([doc.user,doc.created,doc._id.substring(2)],null);
	}
};