const title = document.getElementById('title');
const date = document.getElementById('date');
const location = document.getElementById('date');
const description = document.getElementById('date');
var participants = document.getElementById('participants');
//const data = {title, date, location, description, participants}
private.db.collection("protests").add({
    date : date,
    description : description,
    location : location,
    numParticipants : participants,
    title : title
}).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
}).catch(function(error) {
        console.error("Error adding document: ", error);
});

//ideally I wanted to get the most recent document, but since I don't know that I just slammed in a index.html
var docRef = db.collection("protests").doc(index.html);

// Valid options for source are 'server', 'cache', or
// 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
// for more information.
var getOptions = {
    source: 'cache'
};

// Get a document, forcing the SDK to fetch from the offline cache.
docRef.get(getOptions).then(function(doc) {
    // Document was found in the cache. If no cached document exists,
    // an error will be returned to the 'catch' block below.
    console.log("Cached document data:", doc.data());
}).catch(function(error) {
    console.log("Error getting cached document:", error);
});
//deleting document
db.collection("protests").doc(/*identify the doc you wanna delete somehow*/).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
