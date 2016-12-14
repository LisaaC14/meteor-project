import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
// Global access

if ( Meteor.isServer )
{
	Meteor.startup
	(
		function ()
		{
			// Populate once
			if ( !series.find().count() )
			{
				series.insert( { name : "The 100", year : "2008", id : "1" } );
			}
		}
	);
}

if ( Meteor.isClient )
{

	// Helpers
	// Partie qui permet de dire où on affiche le tabeau des données
	Template.liste_tpl.helpers
	(
		{
			all_series : function ()
			{
				return series.find().map
				(
					function( series, index, cursor )
					{
						return { name : series.name, year : series.year };
					}
				);
			},
			getSeries: function() {
				return series.find().fetch();
			}
		}
	);

	// Pour ajouter une série
		Template.admin.events
			( {
			'click #submit_serie' : function( event, template )
				{
					debugger;
					var $name = template.find( "#name" );
					var $year = template.find( "#year" );
					if( $name.value !== "" && $year.value !== ""){

						Meteor.call("addSerie", {
							name : $name.value , year : $year.value
						});

					}
				}
			} );

// Pour supprimer une série
	Template.liste_tpl.events
		( {
		'click .remove_serie' : function( event, template )
			{
				var id = this._id;
				Meteor.call("removeThat", {
					id : id
				});
			 }
	 });

	 // Pour modifier une série
		 Template.liste_tpl.events
			 ( {
			 'click .update_serie' : function( event, template )
				 {
					 var $name = template.find(".new_name");
					 var name = $name.value;
					 var id = this._id;
					 if( name.value !== ""){

						 Meteor.call("updateThat", {
							 id : id,
							 name : name
						 });

					 }
				 }
			 } );

}
