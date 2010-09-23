/**
 * Lists all documents by id. Includes relevant data using view collation.
 * 
 * @author Benjamin Erb
 */
/* 
 * Key indices:
 * 
 * 0 = Document
 * 1 = Attachment
 * 2 = 
 * 3 = 
 * 4 = Inbound Link
 * 5 = Outbound Link
 * 
 */

function(doc) {
	if(doc.type === 'document' && doc.published)
	{
		emit([doc._id.substring(2),0], {_id : doc._id});
	}
	else if(doc.type === 'attachment' && !(doc.location === void 0))
	{
		emit([doc.doc_id,1,doc.uploaded], {_id : doc._id});
//		//TODO: 
//		emit([doc._id.substring(2),3], {_id : 't'+doc._id.substring(1)});
	}
	else if(doc.type === 'spatial')
	{
		emit([doc._id.substring(2),2], {_id : doc._id});
	}
	else if(doc.type === 'link')
	{
		//inbound
		emit([doc.dest,4], {_id : doc._id});
		//outbound
		emit([doc.src,5], {_id : doc._id});
	}
}