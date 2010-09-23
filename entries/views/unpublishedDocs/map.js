/**
 * List all documents that have been created but not yet uploaded. 
 * 
 * Useful to detect failed or invalid uploads. 
 * 
 * @author Benjamin Erb
 */
function(doc) 
{
	if(doc.type === 'document' && (doc.published === void 0))
	{
		emit(doc.uploaded,{id:doc._id.substring(2), _id : doc._id});
	}
};