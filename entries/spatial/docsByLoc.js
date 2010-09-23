/**
 * List documents by location.
 * 
 * This geo-spatial view emits an entry for all spatial documents in the database. 
 * 
 *  @author Benjamin Erb 
 * 
 */
function(doc) 
{

	var R = 6371;
	var brng = 45;

	if(doc.type === 'spatial' && doc.lat !== 0 && doc.lon !== 0 && doc.variance !== 0)
	{
		//Calculate bounding box using the variance value.
		
		var d = -1 * ((Math.sqrt(2*(doc.variance/ 1000)*(doc.variance/ 1000))) / R);

		var lat1 = doc.lat *  Math.PI / 180;
		var lon1 = doc.lon* Math.PI / 180;

		var lat_l = Math.asin( Math.sin(lat1)*Math.cos(d) + 
				Math.cos(lat1)*Math.sin(d)*Math.cos(brng) );
		var lon_l = lon1 + Math.atan2(Math.sin(brng)*Math.sin(d)*Math.cos(lat1), 
				Math.cos(d)-Math.sin(lat1)*Math.sin(lat_l));
		lon_l = (lon_l+3*Math.PI)%(2*Math.PI) - Math.PI;

		var lat_l = lat_l  * 180/  Math.PI;
		var lon_l = lon_l  * 180/ Math.PI ;

		d = -d;

		var lat_u = Math.asin( Math.sin(lat1)*Math.cos(d) + 
				Math.cos(lat1)*Math.sin(d)*Math.cos(brng) );
		var lon_u = lon1 + Math.atan2(Math.sin(brng)*Math.sin(d)*Math.cos(lat1), 
				Math.cos(d)-Math.sin(lat1)*Math.sin(lat_l));
		lon_u = (lon_u+3*Math.PI)%(2*Math.PI) - Math.PI;

		var lat_u = lat_u  * 180/  Math.PI;
		var lon_u = lon_u  * 180/ Math.PI ;

		emit({
			type: "Point",
			coordinates: [doc.lon, doc.lat],
			bbox : [lon_l,lat_l,lon_u,lat_u]                              
		}, 
		{
			id : doc.doc_id,
			lat:doc.lat,
			lon:doc.lon,
			variance:doc.variance
		});


	}
	else if(doc.type === 'spatial' && doc.lat !== 0 && doc.lon !== 0)
	{
		emit({
			type: "Point",
			coordinates: [doc.lon, doc.lat]                             
		}, 
		{
			id : doc.doc_id,
			lat:doc.lat,
			lon:doc.lon,
			variance:0
		});
	}
};