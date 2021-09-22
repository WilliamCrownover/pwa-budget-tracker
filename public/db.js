let db;
// VERSION
let dbVersion = 2;

const request = indexedDB.open('BudgetDB', dbVersion);

// On Upgrade Needed
request.onupgradeneeded = function (e) {
	console.log('Upgrading indexedDB');

	const { oldVersion } = e;
	const newVersion = e.newVersion || db.version;

	console.log( `indexedDB updated from V${oldVersion} to V${newVersion}`);

	db = e.target.result;

	if( db.objectStoreNames.length === 0 ) {
		db.createObjectStore( 'BudgetStore', { autoIncrement: true } );
	}
};