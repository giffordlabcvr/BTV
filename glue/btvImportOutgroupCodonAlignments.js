var segments = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

_.each(segments, function(segment) {
	glue.command(["import", "alignment", "-f", "alignments/btvOutgroupCodon/BTV_OUTG_CODON_"+segment+".json"]);
	glue.log("FINEST", "Imported outgroup-codon alignment for segment "+segment);
});


