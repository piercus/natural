

sand.define("regexper", ["fs"], function(r){

  var fn = function(moduleName, specName){
    var path = moduleName.split("/"),
        fileName = path[path.length - 1],
        srcFile = "oldLib/"+moduleName,  
        newsrcFile = "lib/"+moduleName,
        
        specFile = specName ? "specOld/"+specName : "specOld/"+fileName+"_spec",     
        newspecFile = specName ? "spec/"+specName : "spec/"+fileName+"_spec";
    var requires = ['jasmine/describe', 'jasmine/expect'];
	  var rules = [{
  	      reg : /\n/g,
  	      replace : "\n  "
  	    },{
    	      reg : /require\(['"]([\.\w\/]*)['"]\)/g,
    	      replace : function(match, m1) {
              requires.push(m1.split("/").slice(1).join("/"));
              var path = m1.split("/"); 
              return "r."+path[path.length-1];
            }
    	  },{
	      reg : /^/,
	      replace : function(){ 
	        var strReq = requires.length ? "['"+requires.join("', '")+"']" : "[]"; 
	        return "sand.define('"+newspecFile+"', "+strReq+", function(r){\n  \n  var module = {}, expect = r.expect, describe = r.describe;\n\n  ";
	      }
	    },{
	      reg : /$/,
	      replace : "\n \n  return module.exports;\n\n});" 
	    }]; 
	  
	  if(r.fs.existsSync(specFile+".js")) {
      var text = r.fs.readFileSync(specFile+".js", "utf8");
      for(var i = 0; i < rules.length ; i++){
        text = text.replace(rules[i].reg, rules[i].replace);
      }
      r.fs.writeFileSync(newspecFile+".js", text, "utf8");	    
	  } 

    var requires = []; 
	  var rules = [{
          reg : /require\(['"]([\.\w\/]*)['"]\)/g,
          replace : function(match, m1) {
            requires.push(m1);
            var path = m1.split("/"); 
            return "r."+path[path.length-1];
          }
        },{
  	      reg : /\n/g,
  	      replace : "\n  "
  	    },{
	      reg : /^/,
	      replace : function(){ 
	        var strReq = requires.length ? "['"+requires.join("', '")+"']" : "[]"; 
	        return "sand.define('"+moduleName+"', "+strReq+", function(r){\n  \n  var module = {}, exports = {};\n  module.exports = exports;\n  ";
	      } 
	    },{
	      reg : /$/,
	      replace : "\n  return module.exports||exports;\n\n});" 
	    }];
	  
    var text = r.fs.readFileSync(srcFile+".js", "utf8");
    for(var i = 0; i < rules.length ; i++){
      text = text.replace(rules[i].reg, rules[i].replace);
    }
    r.fs.writeFileSync(newsrcFile+".js", text, "utf8")
    
  }
  fn("natural/tokenizers/tokenizer")  
  fn("natural/tokenizers/tokenizer_ja")
  
  fn("natural/tokenizers/aggressive_tokenizer")
  fn("natural/tokenizers/aggressive_tokenizer_fa")
  fn("natural/tokenizers/aggressive_tokenizer_ru")
  fn("natural/tokenizers/regexp_tokenizer")
  fn("natural/tokenizers/treebank_word_tokenizer");
  
  fn("natural/analyzers/sentence_analyzer"); 
  
  fn("natural/classifiers/bayes_classifier");
  fn("natural/classifiers/classifier");
  fn("natural/classifiers/logistic_regression_classifier");

  fn("natural/distance/dice_coefficient");
  fn("natural/distance/jaro-winkler_distance");
  fn("natural/distance/levenshtein_distance");
 
  fn("natural/inflectors/count_inflector");
  fn("natural/inflectors/form_set");

  fn("natural/inflectors/fr/count_inflector", "count_inflector_fr_spec");
  fn("natural/inflectors/fr/noun_inflector","noun_inflector_fr_spec");

  fn("natural/inflectors/ja/noun_inflector","noun_inflector_ja_spec");

  fn("natural/inflectors/noun_inflector");
  fn("natural/inflectors/present_verb_inflector");
  fn("natural/inflectors/singular_plural_inflector");

  fn("natural/ngrams/ngrams");
  fn("natural/normalizers/normalizer_ja");
  fn("natural/normalizers/remove_diacritics");
  
  fn("natural/phonetics/dm_soundex");
  fn("natural/phonetics/double_metaphone");
  fn("natural/phonetics/metaphone");
  fn("natural/phonetics/phonetic");
  fn("natural/phonetics/soundex");

  fn("natural/stemmers/lancaster_rules");
  fn("natural/stemmers/lancaster_stemmer");
  fn("natural/stemmers/porter_stemmer");
  fn("natural/stemmers/porter_stemmer_fa"); 
  fn("natural/stemmers/porter_stemmer_ru");
  
  fn("natural/stemmers/stemmer");
  fn("natural/stemmers/stemmer_fa");
  fn("natural/stemmers/stemmer_ru");
  fn("natural/stemmers/stemmer_ja");

  fn("natural/tfidf/tfidf");

  fn("natural/transliterators/ja/index");

  fn("natural/util/stopwords");
  fn("natural/util/stopwords_fa");
  fn("natural/util/stopwords_ja");
  fn("natural/util/stopwords_ru");
  fn("natural/util/utils");

  fn("natural/wordnet/data_file");
  fn("natural/wordnet/index_file");
  fn("natural/wordnet/wordnet");
  fn("natural/wordnet/wordnet_file");


  return fn;
});

                                       
