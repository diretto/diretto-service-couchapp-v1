function(doc) {
	if(doc.username)
	{
		emit(doc.username, doc);
	}
}