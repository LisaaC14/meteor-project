series = new Mongo.Collection( "series" );

//Ajouter une série
Meteor.methods({
    addSerie : function(serie) {
      series.insert( { name : serie.name , year : serie.year } );
    }
 })

// Supprimer la série
Meteor.methods({
    removeThat: function(serie) {
      series.remove( serie.id );
    }
 })

 // Supprimer la série
 Meteor.methods({
     modifyThat: function(serie) {
       series.update( serie.id, { $set : { name : $new_name }} );
     }
  })
