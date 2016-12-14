series = new Mongo.Collection( "series" );

//Ajouter une série
Meteor.methods({
    addSerie : function(serie) {
      series.insert( { name : serie.name , year : serie.year } );
    },
    // Supprimer la série
    removeThat: function(serie) {
      series.remove( serie.id );
    },
    // Modifier une série
    updateThat : function(serie) {
      series.update (
        serie.id
        ,{
            $set : { name : serie.name }
        }
    );
    }
 })
