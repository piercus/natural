sand.define('spec/sentence_analyzer_spec', ['jasmine/describe', 'jasmine/expect', 'natural/analyzers/sentence_analyzer'], function(r){
  
  var module = {}, expect = r.expect, describe = r.describe;

  /*
  Copyright (c) 2011, Rob Ellis, Chris Umbel
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  */
  
  var SentenceAnalyzer = r.sentence_analyzer;
  
  describe('sentence analyzer', function() {
      it('should load', function() {
          var analyzer = new SentenceAnalyzer(null, function() { });
      });
  });
  
 
  return module.exports;

});