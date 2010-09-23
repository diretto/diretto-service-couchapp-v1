/**
 * A view containing relevant data for creating a KML feed.
 * 
 * @author Benjamin Erb
 */
function(doc) 
{

	if (doc.type === 'spatial') 
	{
		if(doc.lat && doc.lon && doc.lat !== 0 && doc.lon !== 0)
		{
			emit([doc.doc_id,2], [doc.lat, doc.lon]);
		}
	}
	else if (doc.type === 'document') 
	{
		emit([doc._id.substring(2),0], {"owner":doc.owner,"mediatype":doc.mediatype,"uploaded":doc.uploaded});
	}
	else if (doc.type === 'attachment') 
	{
		emit([doc.doc_id,1,doc._id.substring(2)], {"uploaded":doc.uploaded,"uploader":doc.uploader,"location":doc.location,"id":doc._id.substring(2)});
	}
};