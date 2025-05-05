javascript
function ajouterAuPanier(nom,prix) {
	// body...
	let panier = JSON.parse(localStrorage.getltem('panier')) || [];
	panier.push({nom:nom,prix:prix});
	localStrorage.setltem('panier',JSON.stringify(panier));
	alter(nom+"ajouté au panier !");
}
function viderPanier() {
	localStrorage.removeltem('panier');
	alter("Panier vidé !");
	location.reload();//recharge la page
}