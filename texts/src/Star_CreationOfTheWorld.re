[%bs.raw {|require("./text.css")|}];

let text = [
  Element.Title([
    Word.make(
      ~orthography={j|teksi|j},
      ~romanization={j|teksi|j},
      ~broad={j|ˈtʰe.kʰsi|j},
      ~narrow={j|ˈtʰə.kʰsɨ|j},
      ~translation={j|of|j},
      ~attributes=[({j|case|j}, {j|topical|j})],
    ),
    Word.make(
      ~orthography={j|ḿráhies|j},
      ~romanization={j|ḿráhies|j},
      ~broad={j|ˈŋʷɹaː.ħi.es|j},
      ~narrow={j|ˈŋʷɹäː.ħi.əs|j},
      ~translation={j|world|j},
      ~attributes=[
        ({j|gender|j}, {j|animate|j}),
        ({j|case|j}, {j|prepositional|j}),
        ({j|number|j}, {j|singular|j}),
      ],
    ),
    Word.make(
      ~orthography={j|yá|j},
      ~romanization={j|yá|j},
      ~broad={j|ˈjaː|j},
      ~narrow={j|ˈjæː|j},
      ~translation={j|and|j},
      ~attributes=[({j|case|j}, {j|topical|j})],
    ),
    Word.make(
      ~orthography={j|ǵaskes|j},
      ~romanization={j|ǵaskes|j},
      ~broad={j|ˈkʷʼas.kʰes|j},
      ~narrow={j|ˈkʷʼɒs.kʰɤs|j},
      ~translation={j|create|j},
      ~attributes=[({j|form|j}, {j|infinitive|j})],
    ),
  ]),
];

ReactDOMRe.renderToElementWithId(<App text />, "root");
