import React from 'react';

const DefineForm = () => {
    return(
      <form className="define-form">
          <p>I'm collecting informal definitions to help people understand LGBTQ+ terms they don't know!</p>

          <p>Help me out by picking a word and telling me what it means to you. Choose any word you think deserves to be in this collection. If you want, you can tell me a bit about your identity to help me make sure I'm including definitions from people with various identities.</p>

          <p>To link to other words use tick marks (NOT single quotes). For example, `LGBTQ+` will link to the definition of LGBTQ+.</p>

          <p>People have requested definitions for these terms:</p>

          <p>Bisexual Jesus | tea | paroromantic | pomosexual  | demifluid | therian | kiki | apressexual | binarism | demiflux | gendervague | pondusgender | omnisensual | pillow princess | bicurious | gynosexual | epicene | ventulian | fingender | wtfsexual | transfeminine | transmasculine | fraysexual | nonbinary femme | body dysphoria | pass | radfem | zedsexual | brotherboy | sistergirl | nblw | split attraction model | juxera | cassgender | metamour | nonbinary girl | greyromantic | intergender | minsexual | alterous attraction | trisexual | lesbian labrys | librafluid | juxera | blue jean femme | ceterosexual | aperiosexual | bellusromantic | genderfuck | two spirit | gendernull | allosexual | queerplatonic | bossy bottom | to read | doe | stag | asexy | generous | biromantic homosexual | fluidflux | aquarigender | arithmagender</p>

          <p className="required">* Required</p>

          <div>
              <label>Name</label>
              <span className="subtitle">(Only if you want credit)</span>
              <input type="text" name="submitter-name" />
          </div>

          <div className="required">
              <label>What term are you defining?</label>
              <input type="text" name="term-name" />
          </div>

          <div className="required">
              <label>Define the term and/or say what it means to you:</label>
              <input type="text" name="term-definition" />
          </div>

          <div>
              <label>What has this term meant in your experience? How have you embodied this term?</label>
              <input type="text" name="term-meaning-to-submitter" />
          </div>

          <div>
              <label>How do you identify?</label>
              <span className="subtitle">(Optional. Ex: race, location, age, gender identity, socioeconomic status, etc)</span>
              <input type="text" name="submitter-identities" />
          </div>
      </form>
    );
}

export default DefineForm;
