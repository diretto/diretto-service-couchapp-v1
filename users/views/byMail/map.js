function(doc) {
	if(doc.email)
	{
		emit(doc.email, doc);
	}
}