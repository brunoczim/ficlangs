module StarFolk where

open import Data.Nat using (ℕ ; suc)
open import Data.Vec using (Vec)

data Gender : Set where
  divine : Gender
  animate : Gender
  inanimate : Gender

data Case : Set where
  nominative : Case
  accusative : Case
  topical : Case
  prepositional : Case

data Number : Set where
  singular : Number
  plural : Number
  nullar : Number
  collective : Number

data Person : Set where
  first : Person
  second : Person
  third : Person

data Tense : Set where
  future : Tense
  present : Tense
  past : Tense
  far-past : Tense

record GenitivePreposition : Set where

record Preposition : Set where

record Noun (g : Gender) (c : Case) (n : Number) : Set where

record Adjective (g : Gender) (c : Case) (n : Number) : Set where

record Pronoun (p : Person) (g : Gender) (c : Case) (n : Number) : Set where

record Verb (t : Tense) (p : Person) : Set where

data NounPhrase : Gender → Case → Number → Set where
  noun : {g : Gender} {c : Case} {n : Number} {m : ℕ}
    → Vec (Adjective g c n) m
    → Noun g c n
    → NounPhrase g c n

  prepositional : {g : Gender} {n : Number}
    → Preposition
    → NounPhrase g prepositional n
    → NounPhrase g prepositional n

  genitive : {g : Gender} {c : Case} {n : Number}
    → GenitivePreposition
    → NounPhrase g prepositional n
    → NounPhrase g c n
    → NounPhrase g c n

record VerbPhrase (t : Tense) (p : Person) : Set where
  field
    {auxs} : ℕ
    verbs : Vec (Verb t p) (suc auxs)
