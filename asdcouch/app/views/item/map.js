function (doc) {
	if (doc._id === value) {
		emit(doc._rev, {
			"category": doc.category[1],
			"name": doc.name[1],
			"ingredients": doc.ingredients[1],
			"directions": doc.directions[1],
			"favorite": doc.favorite[1],
			"rating": doc.rating[1]
		});
	}
};