/**
 * List documents by date.
 * 
 * This "geo-spatial" view emits an entry for all temporal documents in the database. 
 * 
 *  @author Benjamin Erb 
 * 
 */
function(doc) 
{


	if(doc.type === 'temporal' && doc.after && doc.before )
	{
		
		var begin =  Math.round(new Date(doc.after).getTime()/1000);
        var end =  Math.round(new Date(doc.before).getTime()/1000);

		emit({
			type: "Point",
			bbox :  [0,begin,0,end]                            
		}, 
		{
			id : doc.doc_id,
			after:doc.after,
			before:doc.before,
		});
	}
}