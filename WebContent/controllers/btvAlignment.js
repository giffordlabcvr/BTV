btvApp.controller('btvAlignmentCtrl', 
		[ '$scope', '$routeParams', '$controller', 'glueWS', 'dialogs',
		  function($scope, $routeParams, $controller, glueWS, dialogs) {
			addUtilsToScope($scope);

			$controller('alignmentCtrl', { $scope: $scope, 
				glueWebToolConfig: glueWebToolConfig, 
				glueWS: glueWS, 
				dialogs: dialogs});

			$scope.init($routeParams.alignmentName, 
					"btvAlignmentRenderer", "sequence.source.name = 'ncbi-curated'",
					[
					 "sequence.sequenceID",
                     "sequence.gb_country_iso",
                     "sequence.gb_country_short",
					 "sequence.gb_collection_year",
					 "sequence.gb_length",
					 "sequence.gb_create_date",
					 "sequence.pmid_reference",
					 "sequence.gb_isolate",
					 "sequence.gb_host"
					 ]);

			$scope.pagingContext.setDefaultSortOrder([
			    { property: "sequence.sequenceID", displayName: "NCBI Nucleotide ID", order: "+" }
			]);
	
			
			$scope.pagingContext.setSortableProperties([
	            { property:"sequence.sequenceID", displayName: "NCBI Nucleotide ID" },
	            { property:"sequence.gb_length", displayName: "Sequence Length" },
	            { property:"sequence.gb_create_date", displayName: "NCBI Entry Creation Date" },
	            { property:"sequence.gb_update_date", displayName: "NCBI Last Update Date" },
  	            { property:"sequence.gb_country_iso", displayName: "Country of Origin" },
	            { property:"sequence.gb_collection_year", displayName: "Collection Year" },
	            { property:"sequence.gb_isolate", displayName: "Isolate ID" },
	            { property:"sequence.gb_host", displayName: "Host Species" },
	            { property:"sequence.pmid_reference", displayName: "PubMed ID" }
	        ]);

			$scope.pagingContext.setFilterProperties([
         		{ property:"sequence.sequenceID", displayName: "NCBI Nucleotide ID", filterHints: {type: "String"} },
        		{ property:"sequence.gb_length", displayName: "Sequence Length", filterHints: {type: "Integer"} },
        		{ property:"sequence.gb_create_date", displayName: "NCBI Entry Creation Date", filterHints: {type: "Date"} },
        		{ property:"sequence.gb_update_date", displayName: "NCBI Last Update Date", filterHints: {type: "Date"} },
  	            { property:"sequence.gb_country_short", altProperties:["sequence.gb_country_iso"], displayName: "Country of Origin", filterHints: {type: "String"} },
	            { property:"sequence.gb_host", displayName: "Host Species", filterHints: {type: "String"} },
	            { property:"sequence.gb_collection_year", displayName: "Collection Year", filterHints: {type: "Integer"} },
	            { property:"sequence.gb_isolate", displayName: "Isolate ID", filterHints: {type: "String"} },
	            { property:"sequence.sample_type", displayName: "Sample Type", filterHints: {type: "String"} },
  	            { property:"sequence.place_sampled", displayName: "Place Sampled", filterHints: {type: "String"} },
  	            { property:"sequence.tissue_sampled", displayName: "Tissue Sampled", filterHints: {type: "String"} },
  	            { property:"sequence.passage_history", displayName: "Passage History", filterHints: {type: "String"} },
  	            { property:"sequence.passage_cells", displayName: "Passage Cells", filterHints: {type: "String"} },
	            { property:"sequence.pmid_reference", displayName: "PubMed ID", filterHints: {type: "String"} }
			]);

  			$scope.pagingContext.setDefaultFilterElems([]);
			
		}]);