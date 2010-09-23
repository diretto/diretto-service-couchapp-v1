function(doc) 
{
	if(doc.type === 'vote')
	{
		if(doc.vote > 0)
		{
			emit([doc.entity_id,"up"], 1);
		}
		else if(doc.vote < 0)
		{
			emit([doc.entity_id,"down"], 1);
		}
		
	}
};