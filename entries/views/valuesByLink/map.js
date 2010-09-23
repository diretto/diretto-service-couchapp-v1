
function(doc) 
{
	if(doc.type === 'keyvalue' && doc.valueType === 'link')
	{
		emit([doc.link_id,doc.user,doc._id.substring(2)], null);
	}
};