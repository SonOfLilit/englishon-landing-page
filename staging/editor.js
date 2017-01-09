Editor = function(overlay) {
    this.paragraphs=$([overlay.subtitle,overlay.bodytext]);
    this.overlay = overlay;
    var lines=document.internal_id.split("\n");
    var internal_dic={};
    for (var i = 0; i < lines.length; i++) {
      var line=lines[i].split(" ");
      internal_dic[line[0]] = [];   
       for (var j = 1; j < line.length; j++) {
        internal_dic[line[0]].push(line[j]);
         }  
    }
    this.internal_id=internal_dic;
  this.ps = [];

}

Editor.prototype.createAutoQuestion = function(event){
  event.preventDefault();
  var span = $(event.target).parent();
  console.log('createAutoQuestion***** span is: '+span);
  var ctx = this.autoContext
  (span); 

//var ctx = this.autoContext(span);
  if (!ctx) {
    alert("No suitable context found");
    span
      .removeClass('auto-editor-candidate_inne')
      .addClass('eo-editor-irrelevant')
      .off('click');
    return;
  }

  var replaced = span.data('word');
  var correct=span.find (".correct_answer").val(); 
  if (correct=="Don't create"){
    span
      .removeClass('auto-editor-candidate_inner')
      .addClass('eo-editor-irrelevant')
      .off('click');
      return;
  } 
  var word_location= 2;
  if (!ctx) {
    alert("No suitable context found");
    span
      .removeClass('auto-editor-candidate_inner')
      .addClass('eo-editor-irrelevant')
      .off('click');
    return;
  }

    //Creating a list of 4 Distractions randomaly, using the word buffer of the internal id
  var  wrong=[];
    internal_id_keys=Object.keys(this.internal_id);
    while(wrong.length<3){
     // candidate=this.internal_id[internal_id_keys[Math.floor((Math.random() * internal_id_keys.length) + 0) ]][0];
      translation=internal_id_keys[Math.floor((Math.random() * internal_id_keys.length) + 0) ]
      arrayOfCandidate=this.internal_id[translation];
      candidate=arrayOfCandidate[Math.floor((Math.random() * arrayOfCandidate.length) + 0)]
      if (wrong.indexOf(candidate) == -1 && candidate!=correct)
        //wrong.push(candidate);
        wrong.push({word:candidate, translation:translation});
    }

    var question = {
        'context': ctx,
        'replaced': replaced,
        'hint': replaced,
        'correct_answers': [correct],
        'wrong_answers': wrong,
        'word_location':word_location,
        'hint_language': 'he',
        'answer_language': 'en',
      }; 
  console.log("Finished create the object in createAutoquestion"); 
  var res = document.englishonBackend.createQuestion(question);
  span
        .data('context',ctx)
        .removeClass('auto-editor-candidate_inner')
        .addClass('eo-editor-question')
        .off('click','onClick')
       // .on('click', this.question_onClick.bind(this));
  span.on('click', this.question_onClick.bind(this)).children().click(function(e) {
  e.stopPropagation();
});

}


Editor.prototype.question_onClick = function(event) {
  var test=this;
  event.preventDefault();
  var span = $(event.target);
  //var ctx = this.autoContext(span); // TODO: bug: context is breakdown-dependent, and here we pretend it isn't.
  var word = span.data('word');
  var context=span.data('context');
  var question = {
  'word': word,
  'ctx': context,
    };
  var q_dialog=$('<div  align="left" dir="ltr">');
  q_dialog.append($('<h3>')
           .text('You are deleting this word: '+word))
  q_dialog.append($('<h3>')
           .text('With this context: '+context))
  q_dialog.append($('<button>').text("Delete Question").click(function(event) {
    span.removeClass('eo-editor-question')
        .addClass('eo-editor-candidate')
     span.off('click')
    document.englishonBackend.deleteQuestion(question);
      span.on('click',this.onClick.bind(this));   
    q_dialog.dialog('close');
  }.bind(this)))

  q_dialog.dialog();
}
Editor.prototype.onClick = function(event) {
  event.preventDefault();
  var span = $(event.target);
  var ctx = this.autoContext(span); // TODO: bug: context is breakdown-dependent, and here we pretend it isn't.
  var word = span.data('word');

  if (!ctx) {
    alert("No suitable context found");
    span
      .removeClass('eo-editor-candidate')
      .addClass('eo-editor-irrelevant')
      .off('click');
    return;
  }
  span.data('context',ctx);
  var dia = $('<div align="left">');
  var acc = $('<div>');
  var tabs = [];
  acc.append($('<h3>').text("Hebrew -> English"));
  tabs.push(this.h2eui(span))
  acc.append(tabs[0]); 
  /*acc.append($('<h3>').text("English -> Hebrew"));
  tabs.push(this.e2hui(span))
  acc.append(tabs[1]);*/
  acc.accordion({heightStyle: 'content'});
  dia.append(acc);
  dia.append($('<button>').text("Create Question").click(function(event) {
    event.preventDefault();
    var question = tabs[acc.accordion( 'option', 'active')]
        .data('extractor')();
    if (question) {
          question.context = ctx;

      document.englishonBackend.createQuestion(question);
      span
        .off( 'click' )
        .removeClass('eo-editor-candidate')
        .addClass('eo-editor-question')
        .on('click', this.question_onClick.bind(this))
      dia.dialog('close');
    }
  }.bind(this)));
  dia.append($('<button>').text("Mark Irrelevant").click(function(event) {
    event.preventDefault();
    span
      .removeClass('eo-editor-candidate')
      .addClass('eo-editor-irrelevant')
      .off('click');
    dia.dialog('close');
  }));
  dia.append($('<button>').text('Close').click(function(event) {
    event.preventDefault();
    dia.dialog('close');
  }));

  dia.dialog({autoOpen: true, height: 'auto', width: 'auto'});
   $(".wrd").text(word);

}

Editor.prototype.generateUI = function() {
  return $('<div>')
    .append($('<div>')
      .addClass('language_specific'))
    .append($('<div>')
      .append($('<label>').text("Word:"))
      .append($('<span>', { class: 'wrd'})))
      //.append($('<input>', {type: 'text', id: 'wrd'})))
    .append($('<div>')
      .append($('<label>').text("Additional correct answers:"))
      .append($('<input>', {type: 'text', name: 'additional'})))
    .append($('<div>')
      .append($('<label>').text("Wrong answers:"))
      .append($('<input>', {type: 'text', name: 'wrong'})));
};

Editor.prototype.h2eui = function(span) {
  var div = this.generateUI();
  var languageSpecific = div.find('.language_specific');
  
  div.data('extractor', function () {
    //guy
    // var replaced = div.find(':radio:checked').data('heb');
    // var correct = div.find(':checkbox:checked').toArray().map(
    //   function(cb) { return $(cb).data('eng'); });
    var replaced = div.find('.wrd').text();
    var additional = parseCommaSeparated(div.find('input[name="additional"]').val());
    //correct = correct.concat(additional);
    correct = additional;
    var wrong = parseCommaSeparated(div.find('input[name="wrong"]').val());
    var wrong_answers = wrong.map(
       function(wrong) { return {word: wrong} });
    if (!replaced) {
      alert("Choose correct breakdown");
      return;
    }
    if (correct.length === 0) {
      alert("No correct answers chosen");
      return;
    }
    var question = {
      'replaced': replaced,
      'hint': replaced,
      'correct_answers': correct,
      'wrong_answers': wrong_answers,
      'hint_language': 'he',
      'answer_language': 'en'
    };
  

    return question;
  });

  return div;
}

function parseCommaSeparated(commaSeparated) {
  return commaSeparated.split(',').map(
    function (word) { return word.trim(); }).filter(
      function (word) { return word !== ''; });
}

Editor.prototype.e2hui = function(span) {
  var dict = this.lookup(span.data('word'));
  var h1 = Object.keys(dict).length === 1;
  var h1e1 = h1 && dict[Object.keys(dict)[0]].length === 1;

  var div = this.generateUI();
  var languageSpecific = div.find('.language_specific');
  $.each(dict, function(orig, engs) {
    $.each(engs, function(ix, eng) {
      languageSpecific
        .append($('<input type="radio" name="eo-editor-eng">')
            .prop('checked', h1e1)
            .data('orig', orig)
            .data('eng', eng))
          .append($('<label>').text(eng));
      $.each(document.dictionary.get(eng), function(jx, heb) {
        languageSpecific
          .append($('<input type="checkbox">')
            .data('heb', heb))
          .append($('<label>').text(heb));
      });
    });
  });

  div.data('extractor', function () {
    var replaced = div.find(':radio:checked').data('orig');
    var hint = div.find(':radio:checked').data('eng');
    var correct = div.find(':checkbox:checked').toArray().map(
      function(cb) { return $(cb).data('heb'); });
    var additional = parseCommaSeparated(div.find('input[name="additional"]').val());
    correct = correct.concat(additional);
    var wrong = parseCommaSeparated(div.find('input[name="wrong"]').val());
    var wrong_answers = wrong.map(
       function(wrong) { return {word: wrong} });
    if (!replaced || !hint) {
      alert("Choose correct breakdown");
      return;
    }

    if (correct.indexOf(replaced) === -1)
      correct.push(replaced);

    var question = {
      'replaced': replaced,
      'hint': hint,
      'correct_answers': correct,
      'wrong_answers': wrong_answers,
      'answer_language': 'he'
    };

    return question;
  });

  return div;
}




Editor.prototype.autoContext= function(span) {
  var text = span.data('text');
  var word = span.data('word');
  var start = span.data('start');
  var end = span.data('end');
  //console.log("start value: "+start+" and end value: "+ end);
  var len = 5;
  while (true) {
    //debugger;
    var ctx = text.slice(
      Math.max(0, start - len),
      Math.min(text.length, end + len));
    // is the context ambiguous?
    if (ctx.indexOf(word) !== ctx.lastIndexOf(word)) {
      console.log("The context is ambiguous. context is: "+ctx);
      break;
    }
    // is the context unique?
    // console.log('autocontext****'+this)
    // console.log('autocontext****'+this.internal_id)
    // console.log('autocontext****'+this.paragraphs)
    // console.log('autocontext****'+this.ps)
    if (this.ps.filter(function (p) { return p.indexOf(ctx) !== -1 }).length === 1) {
      return ctx; //success!
    } else {
      // context isn't unique.
      // try again with a longer context.
      console.log("try again with a longer context.context: "+ctx);
      len += 5;
      continue;
    }
    // is this the largest candidate context?
    if (ctx === span.data('text')) break;
  }
}

Editor.prototype.fetchQuestions = function() {
  console.log("url: " + this.overlay.url)
  return document.englishonBackend.getArticle(this.overlay.url).then(function(questions) {
      this.questions = questions;
     // console.log("fetchQuestions***paragraphs: "+this.overlay.paragraphs);
      console.log("fetchQuestions*** I brought questions for editor");
    }.bind(this));
}

Editor.prototype.highlight = function() {
    var questions=this.questions;
    var prefix=["ל","ב","ה","ש","מ","כ","ו"];
    var question_dict={};
    for (var i = 0; i < questions.length; i++) {
       if (!(questions[i].replaced in question_dict)){
       question_dict[questions[i].replaced]=[questions[i].context];
         }
         else {
          question_dict[questions[i].replaced].push(questions[i].context);
         }
    }
  this.ps = [];
  this.paragraphs.each(function(i, p) {
    p = $(p);
    $('.artText a').text('HERE IS A LINK!!!!!!') 
    var text = p.text();
    this.ps.push(text);
    p.empty();
    var re = /[א-ת][א-ת'-]*"?[א-ת](?![א-ת])/g;
    var match = [];
    var lastIndex = 0
    while ((match = re.exec(text)) !== null) {
      var isExist=false;
      //TODO: The code is duplicate. Fix it
      if (match[0] in question_dict) {
        for (var i = 0; i < question_dict[match[0]].length; i++) {  
         var context=question_dict[match[0]][i];
         var start_index=match.index-(context.slice(0, context.indexOf(match[0])).length);
         var end_index=re.lastIndex+(context.slice(context.indexOf(match[0])+match[0].length,
                                                   context.length).length);
          
       if (text.slice(start_index,end_index) == context){
        console.log("Find a ready question!!! "+text.slice(start_index,end_index)); 
        isExist=true;
        p.get(0).appendChild(
          document.createTextNode(
            text.slice(lastIndex, match.index)));
        p.append(
          $('<span>')
            .addClass('eo-editor-question')
            .text(match[0])
            .data('text', text)
            .data('start', match.index)
            .data('end', re.lastIndex)
            .data('word', match[0])
            .data('context',context)
            //.off('click',Editor.prototype.onClick())
            .on('click', this.question_onClick.bind(this))
                 );

             }   
         }
     }

     else if(match[0].slice(1) in question_dict && prefix.indexOf(match[0].slice(0,1))!=-1 ){
        for (var i = 0; i < question_dict[match[0].slice(1)].length; i++) {  
         var context=question_dict[match[0].slice(1)][i];
         var start_index=match.index+1-(context.slice(0, context.indexOf(match[0].slice(1))).length);
         var end_index=re.lastIndex+(context.slice(context.indexOf(match[0].slice(1))+match[0].slice(1).length,
                                                   context.length).length);
          
       if (text.slice(start_index,end_index) == context){
        console.log("Find a ready question!!! "+text.slice(start_index,end_index)); 
        isExist=true;
        p.get(0).appendChild(
          document.createTextNode(
            text.slice(lastIndex, match.index+1)));
        p.append(
          $('<span>')
            .addClass('eo-editor-question')
            .text(match[0].slice(1))
            .data('text', text)
            .data('start', match.index+1)
            .data('end', re.lastIndex)
            .data('word', match[0].slice(1))
            .data('context',context)
            //.off('click',Editor.prototype.onClick())
            .on('click', this.question_onClick.bind(this))
                 );

             }   
           } 
        }

     if (isExist==false){

   if (match[0] in this.internal_id){
       // console.log("found id candidte: "+match[0]);
      p.get(0).appendChild(
        document.createTextNode(
          text.slice(lastIndex, match.index)));

      var select=$('<select>')
        .addClass('correct_answer')
      //.on('click',this.createQuestion.bind(this))
      //.on('change',this.createQuestion.bind(span))
      var span = $('<span>')
          .addClass('auto-editor-candidate_inner')
          .text(match[0])
          .data('text', text)
          .data('start', match.index)
          .data('end', re.lastIndex)
          .data('word', match[0])
          .append(select)
      span.find('select').append($('<option>')
                      .text('')
                      .addClass('hide'))
                      .on('change',this.createAutoQuestion.bind(this))
      for (var i = 0; i < this.internal_id[match[0]].length; i++) {
       select.append($('<option>')
         .text(this.internal_id[match[0]][i])     
           )       
     }
      
      p.append(span)
     }
     else if(match[0].slice(1) in this.internal_id && prefix.indexOf(match[0].slice(0,1))!=-1 ){
      console.log("I found a candidate with prefix: "+match[0].slice(1));
      p.get(0).appendChild(
        document.createTextNode(
          text.slice(lastIndex, match.index+1)));

      var select=$('<select>')
      .addClass('correct_answer')
      .on('change',this.createAutoQuestion.bind(this))
      select.append($('<option>')
                      .text('')
                      .addClass('hide'))
      for (var i = 0; i < this.internal_id[match[0].slice(1)].length; i++) {
       select.append($('<option>')
         .text(this.internal_id[match[0].slice(1)][i])     
           )       
     }      
      p.append(
        $('<span>')
          .addClass('auto-editor-candidate_inner')
          .text(match[0].slice(1))
          .data('text', text)
          .data('start', match.index+1)
          .data('end', re.lastIndex)
          .data('word', match[0].slice(1))
          .append(select)
          )
     }

     else {
      p.get(0).appendChild(
        document.createTextNode(
          text.slice(lastIndex, match.index)));
      p.append(
        $('<span>')
          .addClass('eo-editor-candidate')
          .text(match[0])
          .data('text', text)
          .data('start', match.index)
          .data('end', re.lastIndex)
          .data('word', match[0])
          .on('click', this.onClick.bind(this))
      );
    }
  }
      lastIndex = re.lastIndex
    }
    p.get(0).appendChild(
      document.createTextNode(
        text.slice(lastIndex)));
  }.bind(this));



}

 

