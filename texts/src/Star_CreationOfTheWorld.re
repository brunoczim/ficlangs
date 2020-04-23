[%bs.raw {|require("./text.css")|}];

let text = [
  Element.Title([
    Word.make(
      ~orthography={j|teksi|j},
      ~broad={j|ˈtʰe.kʰsi|j},
      ~narrow={j|ˈtʰə.kʰsɨ|j},
      ~translation={j|of|j},
      ~attributes=[({j|case|j}, {j|topical|j})],
      (),
    ),
    Word.make(
      ~orthography={j|ḿráhies|j},
      ~broad={j|ˈŋʷɹaː.ħi.es|j},
      ~narrow={j|ˈŋʷɹäː.ħi.əs|j},
      ~translation={j|world|j},
      ~attributes=[
        ({j|gender|j}, {j|animate|j}),
        ({j|case|j}, {j|prepositional|j}),
        ({j|number|j}, {j|singular|j}),
      ],
      (),
    ),
    Word.make(
      ~orthography={j|yá|j},
      ~broad={j|ˈjaː|j},
      ~narrow={j|ˈjæː|j},
      ~translation={j|and|j},
      ~attributes=[({j|case|j}, {j|topical|j})],
      (),
    ),
    Word.make(
      ~orthography={j|ǵaskes|j},
      ~broad={j|ˈkʷʼas.kʰes|j},
      ~narrow={j|ˈkʷʼɒs.kʰɤs|j},
      ~translation={j|create|j},
      ~attributes=[({j|form|j}, {j|infinitive|j})],
      (),
    ),
  ]),
  Element.Paragraph([
    Word.make(
      ~orthography={j|esiraŕ|j},
      ~broad={j|ˈe.si.ɹaʕ|j},
      ~narrow={j|ˈə.sɨ.ɹäʕ|j},
      ~translation={j|of|j},
      ~attributes=[({j|case|j}, {j|topical|j})],
      (),
    ),
    Word.make(
      ~orthography={j|yeya|j},
      ~broad={j|ˈje.ja|j},
      ~narrow={j|ˈje̞.jæ|j},
      ~translation={j|and|j},
      ~attributes=[({j|case|j}, {j|prepositional|j})],
      (),
    ),
    Word.make(
      ~orthography={j|adbá|j},
      ~broad={j|ˈa.tʼpʼaː|j},
      ~narrow={j|ˈä.tʼpʼäː|j},
      ~translation={j|write|j},
      ~attributes=[({j|form|j}, {j|infinitive|j})],
      (),
    ),
    Word.make(
      ~orthography={j|dwéxkekr|j},
      ~broad={j|ˈtʼweːx.kʰe.kʰɹ|j},
      ~narrow={j|ˈtʼwo̞ːx.kʰɤ̞.kʰɹ|j},
      ~translation={j|matter|j},
      ~attributes=[
        ({j|gender|j}, {j|inanimate|j}),
        ({j|case|j}, {j|topical|j}),
        ({j|number|j}, {j|singular|j}),
      ],
      (),
    ),
    Word.make(
      ~orthography={j|gŋa|j},
      ~broad={j|ˈkʼŋa|j},
      ~narrow={j|ˈkʼŋɑ|j},
      ~translation={j|is|j},
      ~attributes=[({j|person|j}, {j|3rd|j}), ({j|tense|j}, {j|present|j})],
      (),
    ),
    Word.make(
      ~orthography={j|ẋaḿ|j},
      ~broad={j|ˈxʷaŋʷ|j},
      ~narrow={j|ˈxʷɒŋʷ|j},
      ~translation={j|this|j},
      ~attributes=[
        ({j|gender|j}, {j|inanimate|j}),
        ({j|case|j}, {j|nominative|j}),
        ({j|number|j}, {j|singular|j}),
      ],
      (),
    ),
  ]),
];

ReactDOMRe.renderToElementWithId(<App text />, "root");
